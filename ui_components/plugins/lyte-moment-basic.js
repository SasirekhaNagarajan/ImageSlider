;( function( window ){

	if( lyteDomObj ){
		var shortMon = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
		longMon = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'  ],
		weekLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		weekMid = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		weekShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
		dayArr = [ 31, 28, 31, 30, 31, 30, 31, 31,30, 31, 30, 31 ],
		week = 'W', wod = 1,
		timeZoneOffsets  = {
			UT: 0,
	        GMT: 0,
	        EDT: -4 * 60,
	        EST: -5 * 60,
	        CDT: -5 * 60,
	        CST: -6 * 60,
	        MDT: -6 * 60,
	        MST: -7 * 60,
	        PDT: -7 * 60,
	        PST: -8 * 60
		},
		formats = [
			{ val :'YYYY', type : 'year', regex : /\d{4}/, len : 4 },
			{ val : 'GGGG', type : 'year', regex : /\d{4}/, len : 4, isWEG : true }, 
			{ val : 'gggg', type : 'year', regex : /\d{4}/, len : 4, isWEG : true }, 
			{ val : 'YY', type : 'year', regex : /\d{2}/, len : 2 }, 
			{ val : 'GG', type : 'year', regex : /\d{2}/, len : 2, isWEG : true}, 
			{ val : 'gg', type : 'year', regex : /\d{2}/, len : 2, isWEG : true}, 
			{ val : 'MMMM', type : "month", regex : /[A-z]{3,}/, long : true, str : true, array : longMon }, 
			{ val : 'MMM', str : true, type : "month", regex : /[A-z]{3,}/, array : shortMon }, 
			{ val : 'Mo', suff : true, type : "month", regex : /\d{1,2}(?=st|nd|rd|th)/, max : 12 }, 
			{ val : 'MM', type : "month", regex : /\d{2}/, len : 2, max : 12 }, 
			{ val : 'M', type : "month", regex : /\d{1,2}/, max : 12 }, 
			{ val : 'DDDD', type : 'date', regex : /\d{3}/, len : 3, year : true }, 
			{ val : 'DDDo', type : 'date', suff : true, regex : /\d{1,3}(?=st|nd|rd|th)/, len : 3, year : true, ignore : /\d{3}(?=st|nd|rd|th)/ }, 
			{ val : 'DDD', type : 'date', regex : /\d{1,3}/, year : true, ignore : /\d{3}/}, 
			{ val : 'Do', type : 'date', suff : true , regex : /\d{1,2}(?=st|nd|rd|th)/ }, 
			{ val : 'DD', type : 'date', regex : /\d{2}/, len : 2}, 
			{ val : 'D', type : 'date', regex : /\d{1,2}/ }, 
			{ val : '[' + week + ']Wo', type : 'week', suff : true, regex : new RegExp('\[' + week + '\]\d{1,2}(?=st|nd|th|rd)'), isWEG : true },
			{ val : '[' + week + ']wo', type : 'week', suff : true, regex : new RegExp('\[' + week + '\]\d{1,2}(?=st|nd|th|rd)'), isWEG : true }, 
			{ val : '[' + week + ']WW', type : 'week', regex : new RegExp( week +'(\\d{2})'), len : 2, isWEG : true, match : 1 }, 
			{ val : '[' + week + ']ww', type : 'week', regex : new RegExp( week +'(\\d{2})'), len : 2, isWEG : true, match : 1 }, 
			{ val : '[' + week + ']W', type : 'week', regex : new RegExp( week +'(\\d{1,2})'), isWEG : true, match : 1 }, 
			{ val : '[' + week + ']w', type : 'week', regex : new RegExp( week +'(\\d{1,2})'), isWEG : true, match : 1 }, 
			{ val : 'E', type : 'day', regex : /\d{1}/, isWEG : true }, 
			{ val : 'e', type : 'day', regex : /\d{1}/, isWEG : true, local : true }, 
			{ val : 'A', type : 'meridian', regex : /AM|PM/, str : true, time : true },
			{ val : 'a', type : 'meridian', regex : /am|am/, str : true, time : true, lower : true },
			{ val : 'ZZ', type : 'timezone', regex : /(\+|\-)(\d{2})(\d{2})$/, time : true, len : 2 },
			{ val : 'Z', type : 'timezone', regex : /(\+|\-)(\d{2}):(\d{2})$/, time : true, len : 2 },
			{ val : 'HH', type : 'hour', regex : /\d{2}/, railway : true, time : true, len : 2, max : 23 },
			{ val : 'H', type : 'hour', regex : /\d{1,2}/, railway : true, time : true, max : 23 },
			{ val : 'hh', type : 'hour', regex : /\d{2}/, time : true, len : 2, max : 12 },
			{ val : 'h', type : 'hour', regex : /\d{1,2}/, time : true, max : 12 },
			{ val : 'kk', type : 'hour', regex : /\d{2}/, railway : true, time : true, len : 2, max : 24, deduct : -1 },
			{ val : 'k', type : 'hour', regex : /\d{1,2}/, railway : true, time : true, max : 24, deduct : -1 },
			{ val : 'mm', type : 'minute', regex : /\d{2}/, time : true, len : 2, max : 59 },
			{ val : 'm', type : 'minute', regex : /\d{1,2}/, time : true, max : 59 },
			{ val : 'ss', type : 'second', regex : /\d{2}/, time : true, len : 2, max : 59 },
			{ val : 's', type : 'second', regex : /\d{1,2}/, time : true, max : 59 },
			{ val : 'S', type : 'millisecond', regex : /[0-9]{1,}/, time : true, valForm : /[S]+/ },
			{ val : 'zz', type : 'timezone', regex : /\[(UT|GMT|EDT|EST|CDT|CST|MDT|MST|PDT|PST)\]$/, str : true, time : true },
			{ val : 'z', type : 'timezone', regex : /\[(UT|GMT|EDT|EST|CDT|CST|MDT|MST|PDT|PST)\]$/, str : true, time : true },
			{ val : 'X', type : 'timestamp', regex : /\d{10}/, time : true},
			{ val : 'x', type : 'timestamp', regex : /\d{13,}/, time : true, milli : true}, 
			{ val : 'dddd', type : "longdate", regex : /[A-z]{3,}/, long : true, str : true, array : weekLong },
			{ val : 'ddd', type : "longdate", regex : /[A-z]{3}/, str : true, array : weekMid },
			{ val : 'dd', type : "longdate", regex : /[A-z]{2}/, str : true, array : weekShort },
			{ val : 'do', type : "longdate", regex : /\d{1}(?=st|nd|rd|th)/, suff : true},
			{ val : 'd', type : 'longdate', regex : /\d{1}/ },
			{ val : 'Qo', type : 'quarter', regex : /\d{1}(?=st|nd|rd|th)/, suff : true }, 
			{ val : 'Q', type : 'quarter', regex : /\d{1}/ }
		 ];

		function lyteMoment( arg, format ){
			if( arg ){
				this._arg = arg; 
			}
			this._format = format;
			var ret = isEmpty( arg );	
			if( ret ) {
				arg = new Date();
			}
			this._isValid = validate.call( this, arg, format )
		}

		function isDef( arg ) {
			return arg != undefined;
		}

		function totdate( month, isLeap1, day ){
			var total = 0;
			for(var i = 0; i < month; i++ ) {
				total += dayArr[ i ];
				if( isLeap1 && i == 1 ) {
					total += 1;
				}
			} 
			return total + ( day || 0 );
		}

		function isEmpty( arg ){
			if( !arg ){
				return true;
			}
			var cons = arg.constructor;
			if( cons == Array && !cons.length ){
				return true;
			} else if( cons == Object && !Object.keys( arg ).length ){
				return true;
			}
			return false;

		}

		function isLeap( year ) {
			year = year + '';
			if( year.length == 2 ) {
				if( parseInt( year ) >= 70 ){
					year = '19' + year;
				} else {
					year = '20' + year;
				}
			}
			year = parseInt( year );
			return ( ( year % 4 == 0 ) && ( year % 100 != 0 ) ) || ( year % 400 == 0 );
		}

		function nthconv( date ) {
			 if( date > 3 && date < 21 ) {
			 	return 'th'
			 }
		     switch ( date % 10 ) {
	            case 1 :  return "st";
	          	case 2 :  return "nd";
          	  	case 3 :  return "rd";
		        default : return "th";
 	        }
		}

		function replaceTxt( format ) {
			var matches = format.match( /{{/ ), matches1 = format.match( /}}/ );
			if( !( matches && matches1 ) ) {
				return format;
			}
			format = format.replace( format.slice( matches.index, matches1.index + 2 ), function( arg ){
				var ret = ""
				for( var j = 0; j < arg.length - 4; j++ ) {
					ret += '*';
				}
				return ret;
			} )
			return replaceTxt( format );
		}

		function parseFormat( format ) { 
			var forCopy = formats.slice(), order = [];
			for( var i = 0; i < forCopy.length; i++ ) {
				var cur = forCopy[ i ];
				if( !format.length ) {
					break;
				}
				if( format.indexOf( cur.val ) > -1 ) {
					order.push( { format : cur, index : format.indexOf( cur.val ) });
					format = format.replace( cur.val, Math.pow( 10, cur.val.length - 1 ) );
					i--;
					continue;
				} 
			}
			return order.sort(function( a, b ){
					return a.index - b.index
				});
		}

		function fmReplace( arg, arr ) {
			var length = 0;
			for( var i = 0; i < arr.length; i++ ) {
				arg = arg.slice( 0, arr[ i ].index + length ) + arr[ i ].format.val + 'lyteMoment' + arg.slice( arr[ i ].index + length + arr[ i ].format.val.length );
				length += 10;
			}
			return arg;
		}

		function replace( arg, val, suff, rep ) {
			arg = arg.replace( val, rep || "" );
			if( suff ) {
				arg = arg.replace( /st|nd|rd|th/, '' )
			}
			return arg;
		}

		function find( array, val ){
			var crct, i;
			for( i = 0; i < array.length; i++ ) {
				if( new RegExp( array[ i ] ).test( val ) ) {
					crct = array[ i ];
					break;
				}
			}
			return  { mon : crct, index : i };
		}

		function getMonth( val, suff, str, long ) {
			var mon;
			if( str ) {
				var ret = find( long ? longMon : shortMon, val );
				mon = ret.mon;
				val = ret.index;
			} else {
				val = parseInt( val ) - 1;
				if( val > 11 ) {
					val = 'Invalid';
				} 
			}

			return { val : val, mon : mon };
		}

		function convertTimeZone( arg ) {
			var ret,
			hour = parseInt( arg[ 2 ] ); minute = parseInt( arg[ 3 ] );
			ret = hour * 60 + minute;
			return arg[ 1 ] == '+' ? ( ret * -1 ) : ret;
		}

		function convertRailway( hour, pm ) {
			if( pm && hour < 12 ) {
				hour += 12;
			} else if( hour == 12 && !pm ) {
				hour = 0;
			}
			return hour;
		}

		function getDay( val, isLeap ) {
			val = parseInt( val ), ini = 0, ind = 0, inc = dayArr[ 0 ];
			if( val > ( 365 + ( isLeap ? 1 : 0 ) ) ){
				return {};
			}
			while( ini + inc < val ) {
				ini += inc;
				ind++;
				inc = dayArr[ ind ]
				if( isLeap && ind == 1 ) {
					inc += 1;
				}
			}
			return { day : val - ini , mon : ind }
		}

		function getWeek( obj ) {
			if( obj.day != undefined || obj.week ) {
				var dtt = new Date( obj.year , 0 ,1 );
				if( !validate.call( this, dtt ) ) {
					return {};
				}
				var dt = dtt.getDay(), isLeap1 = isLeap( obj.year || dtt.getFullYear() ),
				total = wod + obj.week == 1 ? ( obj.day - dt + wod ) : ( obj.week == 2 ? ( 7 + wod - dt + obj.day ) : ( 7 + wod - dt + obj.day + ( obj.week - 2 ) * 7 ) )
				if( total > ( 365 + ( isLeap1 ? 1 : 0 ) ) ) {
					var newStart = new Date( obj.year + 1 , 0 ,1 ).getDay();
					if( newStart > 4 ) {
						obj.year += 1;
						total = total - ( ( 365 + ( isLeap1 ? 1 : 0 ) ) );
					}
				}
				if( total > ( 365 + ( isLeap1 ? 1 : 0 ) ) || obj.day == 0 || obj.day > 7 ) {
					obj.month = obj.year = obj.date = 'Invalid';
					return;
				}
				var ret = getDay( total, isLeap1 );
				obj.month = ret.mon; obj.date = ret.day;
			}
			if( obj.year ) {
				var yr = parseInt( obj.year );
				if( yr < 100 ) {
					if( yr >= 70 ){
						obj.year = 1900 + yr;
					} else {
						obj.year = 2000 + yr;
					}
				}
			}
			if( obj.month < 0 ) {
				obj.month = 'Invalid';
			}
			if( obj.date < 1 ) {
				obj.date = 'Invalid';
			}
		}

		function getWeekReverse( dobj ) {
			var isLeap1 = isLeap( dobj.getFullYear() ), month = dobj.getMonth(), date = dobj.getDate(),
			total = -wod, startday = new Date( dobj.getFullYear(), 0 ).getDay(), repYear;
			total += totdate( month, isLeap1 ) 
			if( month == 0 && startday > 4 && date < 3 + wod ) {
				isLeap1 = isLeap( dobj.getFullYear() - 1 );
				total = total + 365 + ( isLeap1 ? 1 : 0 );
				startday = new Date( dobj.getFullYear() - 1, 0 ).getDay();
				repYear = true;
			}
 			return { week : Math.ceil( ( total + startday + date ) / 7 ), day : ( total + startday + date ) % 7 || 7, repYear : repYear};
		}	

		function valFormat( arg, format ){
			var copyFormat = {}, ret, date = new Date( new Date().getFullYear(), 0 ),
			prseVal = parseFormat( replaceTxt( format ) ), copyArg = arg;
			format = format.replace(/{{|}}/g, '');
			var copyFormat1 = format;
			for( var i = 0; i < prseVal.length; i++ ) {
				var ret, cur = prseVal[ i ].format;
				switch( cur.type ) {
					case 'date' :
					case 'year':
					case 'week' :
					case 'day' : {
						if( cur.regex.test(arg) ) {
							ret = parseInt( arg.match( cur.regex )[ cur.match || 0 ] );
							copyFormat[ cur.type ] = ret;
							arg = replace( arg, cur.regex, cur.suff );
							copyArg = replace( copyArg, cur.regex, cur.suff, cur.val );
							if( cur.type == 'week' ) {
								arg = replace( arg, week );
							}
							if( cur.type == 'day' && cur.local ) {
								copyFormat.day++;
							}
							if( cur.year ) {
								copyFormat.date = getDay( copyFormat.date ).day;
							}
						} else {
							if( copyFormat.year && copyFormat.week ) {
								copyFormat[ cur.type ] = wod;
								format = format.replace( cur.val, '' );
								copyFormat1 = copyFormat1.replace( cur.val, '' );
							} else {
								copyFormat[ cur.type ] = 'Invalid';
							}
						}
						break;
					}
					case 'month' : {
						if( cur.regex.test(arg) ) {
							ret = getMonth( arg.match(  cur.regex )[ 0 ], cur.suff, cur.str, cur.long );
							copyFormat.month = ret.val;
							arg = replace( arg, ret.mon || ( cur.regex ), cur.suff );
							copyArg = replace( copyArg, ret.mon || ( cur.regex ), cur.suff, cur.val );
						} else {
							copyFormat.month = 'Invalid';
						}
						break;
					}
					case 'quarter' : {
						if( cur.regex.test(arg) ) {
							ret = arg.match(  cur.regex )[ 0 ];
							copyFormat.quarter = ret;
							arg = replace( arg, ret, cur.suff );
							copyArg = replace( copyArg, ret, cur.suff, cur.val );
						}
						break;
					}
					case 'longdate' : {
						if( cur.regex.test(arg) ) {
							if( cur.str ) {
								ret = find( cur.array, arg.match(  cur.regex )[ 0 ] );
							} else {
								ret = parseInt( arg.match( cur.regex )[ 0 ] );
							}
							copyFormat.longdate = !isDef( ret.index ) ? ret : ret.index;
							arg = replace( arg, ret.mon || ret, cur.suff )
							copyArg = replace( copyArg, ret.mon || ret, cur.suff, cur.val );
						}
						break;
					}
					case 'hour' : 
					case 'minute' : 
					case 'second' :
					case 'meridian' : {
						if( cur.regex.test(arg) ) {
							if( cur.str ) {
								ret = arg.match( cur.regex )[ 0 ];
							} else {
								ret = parseInt( arg.match( cur.regex )[ 0 ] );
								if( cur.railway ) {
									copyFormat.railway = true;
								}
							}
							if( cur.deduct ) {
								ret--;
							}
							copyFormat[ cur.type ] = ret;
							if( cur.max && ret > cur.max ) {
							    copyFormat[ cur.type ] = 'Invalid';
							}
							arg = replace( arg, cur.regex );
							copyArg = replace( copyArg, cur.regex, cur.suff, cur.val );
						}
						break;
					}
					case 'millisecond' : {
						if( cur.regex.test(arg) ) {
							ret = arg.match( cur.regex )[ 0 ];
							copyFormat.millisecond = parseFloat( ret );
							arg = replace( arg, ret ).replace(/[S]+/, '');
							copyArg = replace( copyArg, cur.regex, cur.suff, cur.val );
							copyFormat1 = copyFormat1.replace(/[S]+/, 'S');
						}
						break;
					}
					case 'timestamp' : {
						if( cur.regex.test(arg) ) {
							ret = parseInt( arg.match( cur.regex )[ 0 ] );
							copyFormat.timestamp = ret * ( cur.milli ? 1 : 1000 );
							arg = replace( arg, ret );
							copyArg = replace( copyArg, ret, cur.suff, cur.val );
						}
						break;
					}
					case 'timezone' : {
						if( cur.regex.test(arg) ) {
							if( cur.str ) {
								ret = arg.match( cur.regex )[ 0 ];
								ret = timeZoneOffsets[ ret ];
							} else {
								ret = convertTimeZone( arg.match( cur.regex ) )
							}
							this._utcOffset = ret;
							copyFormat.timezone = ret - ( date.getTimezoneOffset() );
							arg = replace( arg, cur.regex );
							copyArg = replace( copyArg, cur.regex, cur.suff, cur.val );
						}
						break;
					}
				}
			format = format.replace( cur.valForm || cur.val, '' );
			}
			if( isDef( copyFormat.day ) || isDef( copyFormat.week ) ){
				var oriDate = copyFormat.date
				if( !isDef( copyFormat.year ) ) {
					copyFormat.year = date.getFullYear();
				}
				if( !isDef( copyFormat.day ) ) {
					copyFormat.day = wod;
				} 
				getWeek.call( this, copyFormat );
				if( isDef( oriDate ) ){
					if( copyFormat.date > oriDate ) {
						copyFormat.month++;
					} 
					copyFormat.date = oriDate;
				}
			}
			if( isDef( copyFormat.longdate ) && copyFormat.day && copyFormat.day != copyFormat.longdate ) {
				date.setFullYear( 'Invalid' );
			} else if( isDef( copyFormat.year ) ) {
				date.setFullYear( copyFormat.year );
			}
			if( isDef( copyFormat.month ) ) {
				date.setMonth( copyFormat.month );
			}
			if( isDef( copyFormat.date ) ) {
				date.setDate( copyFormat.date <= ( dayArr[ date.getMonth() ] + ( isLeap( date.getFullYear() ) ? 1 : 0 ) ) ? copyFormat.date : 'Invalid');
			}
			if( isDef( copyFormat.hour ) ) {
				var mer = copyFormat.meridian;
				date.setHours( copyFormat.railway ? convertRailway( copyFormat.hour, mer ? ( mer == 'PM' ) : ( copyFormat.hour > 11 ) ) : ( mer == 'PM' ? ( copyFormat.hour < 12 ? ( copyFormat.hour + 12 ) : copyFormat.hour ) : copyFormat.hour % 12 ) )
			}
			if( isDef( copyFormat.minute ) ) {
				date.setMinutes( copyFormat.minute )
			}
			if( isDef( copyFormat.second ) ) {
				date.setSeconds( copyFormat.second + ( copyFormat.millisecond || 0 ) * 0.001 )
			}
			if( isDef( copyFormat.timestamp ) ) {
				date = new Date( copyFormat.timestamp )
			}
			if( isDef( copyFormat.timezone ) ) {
				date.setMinutes( date.getMinutes() + copyFormat.timezone );
			}
			if( this._isCorrectFormat = arg.length == format.length && copyFormat1 == copyArg && validate.call( this, date ) ) {
				return true
			} else if( !this._format ) {
				return validate.call( this, new Date( this._arg ) );
			}
		}

		function crctLength( val, length, suff, deduct ) {
			var sfx = ''
			if( deduct ) {
				val++;
			}
			if( suff ) {
				sfx = nthconv( val );
			}
			if( length ) {
				val = val.toString();
				for( var i = 1; i < length; i++ ) {
					if( val.length <= i ) {
						val = '0' + val;
					}
				}
			}
			return val + sfx;
		}

		function getDObj(){
			var date;
			if( this._UTC ) {
				date = new Date( this._dateObj.getTime() )
				date.setMinutes( date.getMinutes() + date.getTimezoneOffset() );
			}
			return date || this._dateObj;
		}

		function convertFormat( arg ) {
			var date = getDObj.call( this ), parseVal = parseFormat( replaceTxt( arg ) ), isWeek = {},
			obj = { date : date.getDate(), month : date.getMonth(), year : date.getFullYear(), day : date.getDay() };
			arg = fmReplace( arg.replace(/{{|}}/g, ''), parseVal );
			for( var i = 0; i < parseVal.length; i++ ) {
				var ret, cur = parseVal[ i ].format;
				switch( cur.type ) {
					case "date" : {
						arg = arg.replace( cur.val + 'lyteMoment', crctLength( ( cur.year ? totdate( obj.month, isLeap( obj.year ), obj.date ) : obj.date ), cur.len, cur.suff ) )
					}
					break;
					case "month" : {
						if( cur.str ) {
							arg = arg.replace( cur.val + 'lyteMoment', cur.array[ obj.month ] );
						} else {
							arg = arg.replace( cur.val + 'lyteMoment', crctLength( obj.month + 1, cur.len, cur.suff ) );
						}
					}
					break;
					case "year" : {
						arg = arg.replace( cur.val + 'lyteMoment', cur.len == 2 ? obj.year % 100 : obj.year );
						isWeek.year = isWeek.year || [];
						isWeek.year.push( cur );
					}
					break;
					case "day" :
					case "week" : {
						isWeek.flag = true
						isWeek[ cur.type ] = isWeek[ cur.type ] || [];
						isWeek[ cur.type ].push( cur );
					}	
					break;
					case "quarter" : {
						arg = arg.replace( cur.val + 'lyteMoment', crctLength( Math.ceil( ( obj.month + 1 ) / 3 ), null , cur.suff ) )
					}
					break;
					case 'longdate' : {
						if( cur.str ) {
							arg = arg.replace( cur.val + 'lyteMoment', cur.array[ obj.day ]);
						} else {
							arg = arg.replace( cur.val + 'lyteMoment', crctLength( obj.day, null , cur.suff ) )
						}
					}
					break;
					case 'hour' : {
						var hr = date.getHours();
						arg = arg.replace( cur.val + 'lyteMoment', crctLength( !cur.railway ? ( hr > 12 ? hr % 12 : ( hr || 12 ) ) : hr, cur.len, null, cur.deduct ) )
					}
					break;
					case 'minute' : {
						arg = arg.replace( cur.val + 'lyteMoment', crctLength( date.getMinutes(), cur.len ) )
					}
					break;
					case 'second' : {
						arg = arg.replace( cur.val + 'lyteMoment', crctLength( date.getSeconds(), cur.len ) )
					}
					break;
					case 'millisecond' : {
						arg = arg.replace( cur.val + 'lyteMoment', date.getMilliseconds() / Math.pow( 10, 3 ) ).replace( /\\S+/, '' )
					}
					break;
					case 'timezone' : {
						var val = '';
						if( !cur.str ) {
							var off = date.getTimezoneOffset(), hr = this._UTC ? '00' : crctLength( Math.abs( parseInt( off / 60 ) ), 2 ), min = this._UTC ? '00' : crctLength( Math.abs( off % 60 ), 2 ), sign = off < 0 ? '+' : '-';
							if( cur.val == 'ZZ' ) {
								val = sign + hr + min;
							} else {
								val = sign + hr + ':' + min;
							}
						}
						arg = arg.replace( cur.val + 'lyteMoment', val );
					}
					break;
					case 'timestamp' : {
						var val = '';
						if( cur.val == 'X' ) {
						 	val += parseInt( date.getTime() / 1000 )
						} else {
							val += date.getTime();
						}
						arg = arg.replace( cur.val + 'lyteMoment', val );
					}
					break;
					case 'meridian' : {
						var forr = date.getHours() > 11 ? 'PM' : 'AM';
						if( cur.lower ) {
							forr = forr.toLowerCase();
						}
						arg = arg.replace( cur.val + 'lyteMoment', forr );
					}
				}
			}
			if( isWeek.flag ) {
				var ret = getWeekReverse( date );
				if( isWeek.week ){
					for( var j = 0; j < isWeek.week.length; j++ ){
						arg = arg.replace( isWeek.week[ j ].val + 'lyteMoment', week + crctLength( ret.week, isWeek.week[ j ].len, isWeek.week[ j ].suff ) );
					}
				}
				if( isWeek.day ) {
					for( var j = 0; j < isWeek.day.length; j++ ){
						arg = arg.replace( isWeek.day[ j ].val + 'lyteMoment', ret.day - ( isWeek.day[ j ].local ? 1 : 0 ) );
					}
				}
				if( ret.repYear && isWeek.year ) {
					for( var j = 0; j < isWeek.year.length; j++ ){
						arg = arg.replace( ( isWeek.year[ j ].len == 2 ? obj.year % 100 : obj.year ), ( isWeek.year[ j ].len == 2 ? obj.year % 100 : obj.year ) - 1 );
					}
				}
			}
			return arg.replace(/{{|}}/g, '')
		}

		function validate( arg, format ) {
			var cons = arg.constructor;
			if( cons == Date ) {
				this._dateObj = arg;
				this._isMoment = true;
				if( arg.toString() == 'Invalid Date' ) {
					return false;
				} else {
					return true;
				}
			} else if( cons == String ) {
				if( format ) {
					var ret = valFormat.call( this, arg, format );
					if( ret && this._isCorrectFormat ) {
						this._format = format;
					}
					return ret;
				} else {
					if( this.constructFormat ){
						return validate.call( this, arg, this.constructFormat.call( this, arg ) );
					} else {
						console.warn( 'Its not supported in lyte-moment-basic.js. Add lyte-moment-additional.js for format construction' );
					}
				}
			} else if( cons == Array ) {
				// new (Function.prototype.bind.apply(Date, [null].concat([1996,04,28])))
				return validate.call( this, new Date( Date.parse( Date.apply( Date, cons ) ) ).getTime() );
			} else if( cons == Number ) {
				arg *= /^\d{10}$/.test( arg ) ? 1000 : 1;
				return validate.call( this, new Date( arg ) );
			} else if( arg._isMoment ) {
				return validate.call( this, arg._dateObj );
			}
		}

		lyteMoment.prototype = {

			_UTC : false,

			isDef : isDef, 

			find : find,

			isLeap : isLeap,

			dayArr : dayArr,

			getDObj : getDObj,

			getWeekReverse : getWeekReverse,

			weekShort : weekShort,

			weekMid : weekMid,

			weekLong : weekLong,

			longMon : longMon,

			shortMon : shortMon,

			week : week,

			formats : formats,

			replace : replace,

			inbuiltFormats : {},

			validate : function(){
				return !!this._isValid;
			},

			toDate : function(){
				return this._dateObj;
			},

			isSame : function( arg ){
				if( arg && arg._isMoment ) {
					return this._dateObj == arg._dateObj;
				}
				return false;
			},

			format : function( arg ) {
				if( this._isValid ) {
					arg = this.inbuiltFormats[ arg ] || arg || "YYYY-MM-DDTHH:mm:ssZ";
					return convertFormat.call( this, arg );	
				}
			},

			utc : function( arg ) {
				this._UTC = true;
				return this;
			},

			local : function( arg ){
				this._UTC = false;
				return this;
			},

			utcOffset : function( arg ) {
				if( this._isValid ) {
					return this._UTC ? 0 : this._dateObj.getTimezoneOffset();
				}
			}	

		}

		$L.moment = function( arg, format ){
			return new lyteMoment( arg, format );
		}

		$L.moment.lyteMoment = lyteMoment;
	}
})(window);