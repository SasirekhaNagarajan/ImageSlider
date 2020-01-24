;( function( window ){
	if( $L.moment ) {
		var proto = $L.moment.lyteMoment.prototype;
		var standardDate = [
			{ val : 'YYYY-MM-DD', regex : /^(\d{4}-\d{2}-\d{2})/ },
			{ val : 'GGGG-['+ proto.week + ']WW-E', regex : new RegExp( '\^(\\d{4}-'+ proto.week + '\\d{2}-\\d)' ) },
			{ val : 'GGGG-['+ proto.week + ']WW', regex : new RegExp( '\^(\\d{4}-'+ proto.week + '\\d{2})' ) },
			{ val : 'YYYY-DDD', regex : /^(\d{4}-\d{3})/ },
			{ val : 'YYYY-MM', regex : /^(\d{4}-\d{2})/ },
			{ val : 'YYYYMMDD', regex : /^(\d{8})/},
			{ val : 'GGGG['+ proto.week + ']WWE', regex : new RegExp( '\^(\\d{4}'+ proto.week + '\\d{2}\\d)' ) },
			{ val : 'GGGG['+ proto.week + ']WW', regex : new RegExp( '\^(\\d{4}'+ proto.week + '\\d{2})' ) },
			{ val : 'YYYYDDD', regex : /^(\d{4}\d{3})/ }
		],
		standardTime = [
			{ val : 'HH:mm:ss.SSSS', regex : /^\d{2}:\d{2}:\d{2}\.[0-9]{1,}$/ },
			{ val : 'HH:mm:ss,SSSS', regex : /^\d{2}:\d{2}:\d{2},[0-9]{1,}$/ },
			{ val : 'HH:mm:ss', regex : /^\d{2}:\d{2}:\d{2}$/ },
			{ val : 'HH:mm', regex : /^\d{2}:\d{2}$/ },
			{ val : 'HHmmss.SSSS', regex : /^\d{6}\.[0-9]{1,}$/ },
			{ val : 'HHmmss,SSSS', regex : /^\d{6},[0-9]{1,}$/ },
			{ val : 'HHmmss', regex : /^\d{6}$/ },
			{ val : 'HHmm', regex : /^\d{4}$/ },
			{ val : 'HH', regex : /^\d{2}$/ }
		];
		function constructFormatCopy( arg, isTime ) {
			var cpForm = this.formats.slice(), obj = {}, dummy = arg, isWEG = new RegExp(  this.week + '|G|E' , 'i' ).test( arg );
			for( var i = 0; i < cpForm.length; i++ ) {
				var cur = cpForm[ i ];
				if( isTime != cur.time ) {
					continue;
				}
				if( cur.regex.test( dummy ) && isWEG == !!cur.isWEG && !this.isDef( obj[ cur.type ] ) ) {
					if( cur.ignore && !cur.ignore.test( dummy ) ) {
						var dd = this.dayArr[ obj.month ] || 30;
						if( parseInt( dummy.match( cur.regex )[ 0 ] ) < dd ){
							continue;
						}
					}
					if( cur.str ) {
						var matches = this.find( cur.array, dummy.replace( /(Y|G)+/, '' ) ).mon;
						if( matches ){
							arg = this.replace( arg, matches, false, cur.val );
							obj[ cur.type ] = cur.array ? this.find( cur.array, matches ).index : matches;
						}
					} else {
						var matches = dummy.match( cur.regex )[ 0 ];
						arg = this.replace( arg, cur.regex, cur.suff, cur.val );
						obj[ cur.type ] = parseInt( matches );
						if( cur.type == 'week' ) {
							arg = replace( arg, new RegExp( this.week + '(?=\\\[' + this.week + ')') );
						}
					}
					dummy = dummy.replace( matches, '' );
				}
			}
			return arg;
		}

		function iterate( array, arg ) {
			for( var i = 0; i < array.length; i++ ) {
				if( array[ i ].regex.test( arg ) ) {
					return array[ i ];
				}
			}
		}

		function constructFormat( arg ) {
			var dateFormat = iterate.call( this, standardDate, arg ), timeFormat;
			if( dateFormat ) {
				timeFormat = iterate.call( this, standardTime, arg.replace( dateFormat.regex, '' ) );
				if( timeFormat ) {
					arg = dateFormat.val + timeFormat.val;
				} else {
					arg = constructFormatCopy.call( this, arg.replace( dateFormat.regex, dateFormat.val ), true );
				}
			} else {
				arg = constructFormatCopy.call( this, arg )
				arg = constructFormatCopy.call( this, arg, true )
			}
			return arg;
		}

		proto.additional = true;

		$L.extend( proto, {

			 inbuiltFormats : {
			 	localDatetime: 'YYYY-MM-DDTHH:mm',            
		        localSecondDatetime: 'YYYY-MM-DDTHH:mm:ss',
		        localMillisecondDatetime: 'YYYY-MM-DDTHH:mm:ss.SSS',   
		        defaultDate: 'YYYY-MM-DD',                             
		        defaultTime: 'HH:mm',                                
		        defaultTimeSecond: 'HH:mm:ss',                 
		        defaultTimeMillisecond: 'HH:mm:ss.SSS',           
		        defaultWeek: 'GGGG-[W]WW',    
		        defaultMonth: 'YYYY-MM'
			 },

			get : function( arg ){
				if( arg ){
					return this[ arg ]();
				}
			},

			set : function( arg, val ) {
				if( arg ) {
					if( val.constructor == Object ) {
						for( var key in val ) {
							this[ key ]( val[ key ] );
						}
						return this
					} else {
						return this[ arg ]( val );
					}
				}
			},

			constructFormat : constructFormat
		})

		new Array( { prop : 'date', array : [ proto.weekLong, proto.weekShort, proto.weekMid] }, { prop : 'day', array : [ proto.weekLong, proto.weekShort, proto.weekMid] } , { prop : 'month', array : [ proto.shortMon, proto.longMon ] }, { prop : 'year'}, { prop : 'fullYear' }, { prop : 'hours' }, { prop : 'minutes' }, { prop : 'seconds' }, { prop : 'milliseconds' },{ prop : 'UTCMilliseconds' }, { prop : 'time' } ).forEach( function( val ) {
			
			proto[ val.prop ] = function( arg ){
				if( this._isValid ) {
					var dob = this.getDObj();
					var prop = val.prop[ 0 ].toUpperCase() + val.prop.slice( 1 );
					if( this.isDef( arg ) ) {
						if( arg.constructor == String ) {
							for( var i = 0; i < val.array.length; i++ ) {
								var ret = this.find( val.array[ i ], arg )
								if( ret.mon ) {
									arg = ret.index;
									break;
								}
							}
						} else if( arg.constructor == Number && Math.floor( arg ) != arg ) {
							if( val.prop == 'year' ) {
								val.prop = 'month';
								arg = Math.round( arg * 12 );
							} else {
								arg = Math.round( arg )
							}
						}
						if( val.prop == 'day' ) {
							dob.setDate( dob.getDate() + ( arg - dob.getDay() ) );
						} else{
							dob[ 'set' + prop ]( arg );
						}
						return this;
					} else {
						return dob[ 'get' + prop ]();
					}
				}
			}
		});

		$L.extend( proto, {
			week : function( arg ) {
				if( this._isValid ) {
					var dob = this.getDObj();
					if( this.isDef( arg ) ) {
						dob.setDate( dob.getDate() + ( arg - this.week() ) * 7 );
						return this;
					} else{
						return this.getWeekReverse.call( this, dob ).week;
					}
				}
			},

			quarter : function( arg ) {
				if( this._isValid ) {
					var dob = this.getDObj();
					if( this.isDef( arg ) ) {
						var mon = dob.getMonth();
						dob.setMonth( dob.getMonth() + ( arg - this.quarter() ) * 3 );
						return this;
					} else{
						return Math.ceil( dob.getMonth() / 3 );
					}
				}
			},

			add : function( val, prop ) {
				if( this._isValid ) {
					var dob = this.getDObj();
					if( this.isDef( prop ) ) {
						return this.set( prop, this.get( prop ) + val );
					}
				}
			},

			subtract : function( val, prop ) {
				if( this._isValid ) {
					var dob = this.getDObj();
					if( this.isDef( prop ) ) {
						return this.set( prop, this.get( prop ) - val );
					}
				}
			},

			startOf : function( prop ){
				if( this._isValid ) {
					var dob = this.getDObj(), flag;
					switch( prop ) {
						case 'year' : {
							flag = dob.setFullYear( dob.getFullYear() );
						}
						case 'month' : {
							flag = dob.setMonth( flag ? 0 : dob.getMonth() );
						}
						case 'date' :
						case 'day' : {
							flag = dob.setDate( flag ? 1 : dob.getDate() );
						}
						case 'week' : {
							if( !flag ) {
								var ret = this.getWeekReverse( dob )
								flag = dob.setDate( dob.getDate() - ( ret.day - 1 ) );
							}
						}
						case 'hour' : {
							flag = dob.setHours( flag ? 0 : dob.getHours() );
						}
						case 'minute' : {
							flag = dob.setMinutes( flag ? 0 : dob.getMinutes() );
						}
						case 'second' : {
							flag = dob.setSeconds( flag ? 0 : dob.getSeconds() );
						}
						default : {
							dob.setMilliseconds( flag ? 0 : dob.getMilliseconds() );
						}
					}
					return this;
				}
			},
			endOf : function( prop ) {
				if( this._isValid ) {
					var dob = this.getDObj(), flag;
					switch( prop ) { 
						case 'year' : {
							flag = dob.setFullYear( dob.getFullYear() );
						}
						case 'month' : {
							flag = dob.setMonth( flag ? 11 : dob.getMonth() );
						}
						case 'date' :
						case 'day' : {
							var mon = dob.getMonth();
							flag = dob.setDate( flag ? ( this.dayArr[ mon ] + ( mon == 1 && isLeap( dob.getFullYear() ? 1 : 0 ) ) ) : dob.getDate() )
						}
						case 'week' : {
							if( !flag ) {
								var ret = this.getWeekReverse( dob )
								flag = dob.setDate( dob.getDate() + ( 7 - ret.day ) );
							}
						}
						case 'hour' : {
							flag = dob.setHours( flag ? 23 : dob.getHours() );
						}
						case 'minute' : {
							flag = dob.setMinutes( flag ? 59 : dob.getMinutes() );
						}
						case 'second' : {
							flag = dob.setSeconds( flag ? 59 : dob.getSeconds() );
						}
						default : {
							dob.setMilliseconds( flag ? 999 : dob.getMilliseconds() );
						}
					}
					return this;
				}
			},

			fromNow : function( arg ){
				if( this._isValid ) {
					var oldMom = this.get( 'time' ), newMom = $L.moment( arg ).get( 'time' ), obj = {};
					if( this.isDef( newMom ) ) {
						var diff = parseInt( ( newMom - oldMom ) / 1000 ), key, val, past = diff < 0,
						limits = { years : { val : 320 * 24 * 60 * 60, conv : 365 * 24 * 60 * 60 }, months : { val : 26 * 24 * 60 * 60, conv : 30 * 24 * 60 * 60 }, days : { val : 22 * 60 * 60, conv : 24 * 60 * 60 }, hours : { val : 45 * 60, conv : 60 * 60 }, minutes : { val : 44, conv : 60 }, seconds : { val : 0, conv : 1 } };
						diff = Math.abs( diff )
						for( key in limits ) {
							if( diff >= limits[ key ].val ) {
								val = Math.round( diff / limits[ key ].conv );
								break;
							}
						}
						if( this.isDef( val ) ) {
							return { property : key, value : val, past : past, timestamp : newMom - oldMom };
						}
					}
				}
			}		
		} )

	}
})(window);