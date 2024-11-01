!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(i, o, function (e) {
            return t[e]
        }.bind(null, o));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 7)
}([function (t, e, n) {
    "use strict";
    var i = n(1), o = n.n(i), r = n(2), a = n.n(r), s = n(3), u = n.n(s), c = n(4), l = n.n(c);
    o.a.extend(a.a), o.a.extend(u.a), o.a.extend(l.a), e.a = o.a
}, function (t, e, n) {
    t.exports = function () {
        "use strict";
        var t = "millisecond", e = "second", n = "minute", i = "hour", o = "day", r = "week", a = "month",
            s = "quarter", u = "year", c = "date",
            l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }, p = function (t, e, n) {
                var i = String(t);
                return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(n) + t
            }, h = {
                s: p, z: function (t) {
                    var e = -t.utcOffset(), n = Math.abs(e), i = Math.floor(n / 60), o = n % 60;
                    return (e <= 0 ? "+" : "-") + p(i, 2, "0") + ":" + p(o, 2, "0")
                }, m: function t(e, n) {
                    if (e.date() < n.date()) return -t(n, e);
                    var i = 12 * (n.year() - e.year()) + (n.month() - e.month()), o = e.clone().add(i, a), r = n - o < 0,
                        s = e.clone().add(i + (r ? -1 : 1), a);
                    return +(-(i + (n - o) / (r ? o - s : s - o)) || 0)
                }, a: function (t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                }, p: function (l) {
                    return {
                        M: a,
                        y: u,
                        w: r,
                        d: o,
                        D: c,
                        h: i,
                        m: n,
                        s: e,
                        ms: t,
                        Q: s
                    }[l] || String(l || "").toLowerCase().replace(/s$/, "")
                }, u: function (t) {
                    return void 0 === t
                }
            }, m = "en", v = {};
        v[m] = d;
        var g = function (t) {
            return t instanceof _
        }, b = function (t, e, n) {
            var i;
            if (!t) return m;
            if ("string" == typeof t) v[t] && (i = t), e && (v[t] = e, i = t); else {
                var o = t.name;
                v[o] = t, i = o
            }
            return !n && i && (m = i), i || !n && m
        }, y = function (t, e) {
            if (g(t)) return t.clone();
            var n = "object" == typeof e ? e : {};
            return n.date = t, n.args = arguments, new _(n)
        }, w = h;
        w.l = b, w.i = g, w.w = function (t, e) {
            return y(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset})
        };
        var _ = function () {
            function d(t) {
                this.$L = b(t.locale, null, !0), this.parse(t)
            }

            var p = d.prototype;
            return p.parse = function (t) {
                this.$d = function (t) {
                    var e = t.date, n = t.utc;
                    if (null === e) return new Date(NaN);
                    if (w.u(e)) return new Date;
                    if (e instanceof Date) return new Date(e);
                    if ("string" == typeof e && !/Z$/i.test(e)) {
                        var i = e.match(l);
                        if (i) {
                            var o = i[2] - 1 || 0, r = (i[7] || "0").substring(0, 3);
                            return n ? new Date(Date.UTC(i[1], o, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)) : new Date(i[1], o, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)
                        }
                    }
                    return new Date(e)
                }(t), this.$x = t.x || {}, this.init()
            }, p.init = function () {
                var t = this.$d;
                this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
            }, p.$utils = function () {
                return w
            }, p.isValid = function () {
                return !("Invalid Date" === this.$d.toString())
            }, p.isSame = function (t, e) {
                var n = y(t);
                return this.startOf(e) <= n && n <= this.endOf(e)
            }, p.isAfter = function (t, e) {
                return y(t) < this.startOf(e)
            }, p.isBefore = function (t, e) {
                return this.endOf(e) < y(t)
            }, p.$g = function (t, e, n) {
                return w.u(t) ? this[e] : this.set(n, t)
            }, p.unix = function () {
                return Math.floor(this.valueOf() / 1e3)
            }, p.valueOf = function () {
                return this.$d.getTime()
            }, p.startOf = function (t, s) {
                var l = this, f = !!w.u(s) || s, d = w.p(t), p = function (t, e) {
                    var n = w.w(l.$u ? Date.UTC(l.$y, e, t) : new Date(l.$y, e, t), l);
                    return f ? n : n.endOf(o)
                }, h = function (t, e) {
                    return w.w(l.toDate()[t].apply(l.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), l)
                }, m = this.$W, v = this.$M, g = this.$D, b = "set" + (this.$u ? "UTC" : "");
                switch (d) {
                    case u:
                        return f ? p(1, 0) : p(31, 11);
                    case a:
                        return f ? p(1, v) : p(0, v + 1);
                    case r:
                        var y = this.$locale().weekStart || 0, _ = (m < y ? m + 7 : m) - y;
                        return p(f ? g - _ : g + (6 - _), v);
                    case o:
                    case c:
                        return h(b + "Hours", 0);
                    case i:
                        return h(b + "Minutes", 1);
                    case n:
                        return h(b + "Seconds", 2);
                    case e:
                        return h(b + "Milliseconds", 3);
                    default:
                        return this.clone()
                }
            }, p.endOf = function (t) {
                return this.startOf(t, !1)
            }, p.$set = function (r, s) {
                var l, f = w.p(r), d = "set" + (this.$u ? "UTC" : ""),
                    p = (l = {}, l[o] = d + "Date", l[c] = d + "Date", l[a] = d + "Month", l[u] = d + "FullYear", l[i] = d + "Hours", l[n] = d + "Minutes", l[e] = d + "Seconds", l[t] = d + "Milliseconds", l)[f],
                    h = f === o ? this.$D + (s - this.$W) : s;
                if (f === a || f === u) {
                    var m = this.clone().set(c, 1);
                    m.$d[p](h), m.init(), this.$d = m.set(c, Math.min(this.$D, m.daysInMonth())).$d
                } else p && this.$d[p](h);
                return this.init(), this
            }, p.set = function (t, e) {
                return this.clone().$set(t, e)
            }, p.get = function (t) {
                return this[w.p(t)]()
            }, p.add = function (t, s) {
                var c, l = this;
                t = Number(t);
                var f = w.p(s), d = function (e) {
                    var n = y(l);
                    return w.w(n.date(n.date() + Math.round(e * t)), l)
                };
                if (f === a) return this.set(a, this.$M + t);
                if (f === u) return this.set(u, this.$y + t);
                if (f === o) return d(1);
                if (f === r) return d(7);
                var p = (c = {}, c[n] = 6e4, c[i] = 36e5, c[e] = 1e3, c)[f] || 1, h = this.$d.getTime() + t * p;
                return w.w(h, this)
            }, p.subtract = function (t, e) {
                return this.add(-1 * t, e)
            }, p.format = function (t) {
                var e = this;
                if (!this.isValid()) return "Invalid Date";
                var n = t || "YYYY-MM-DDTHH:mm:ssZ", i = w.z(this), o = this.$locale(), r = this.$H, a = this.$m,
                    s = this.$M, u = o.weekdays, c = o.months, l = function (t, i, o, r) {
                        return t && (t[i] || t(e, n)) || o[i].substr(0, r)
                    }, d = function (t) {
                        return w.s(r % 12 || 12, t, "0")
                    }, p = o.meridiem || function (t, e, n) {
                        var i = t < 12 ? "AM" : "PM";
                        return n ? i.toLowerCase() : i
                    }, h = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: s + 1,
                        MM: w.s(s + 1, 2, "0"),
                        MMM: l(o.monthsShort, s, c, 3),
                        MMMM: l(c, s),
                        D: this.$D,
                        DD: w.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: l(o.weekdaysMin, this.$W, u, 2),
                        ddd: l(o.weekdaysShort, this.$W, u, 3),
                        dddd: u[this.$W],
                        H: String(r),
                        HH: w.s(r, 2, "0"),
                        h: d(1),
                        hh: d(2),
                        a: p(r, a, !0),
                        A: p(r, a, !1),
                        m: String(a),
                        mm: w.s(a, 2, "0"),
                        s: String(this.$s),
                        ss: w.s(this.$s, 2, "0"),
                        SSS: w.s(this.$ms, 3, "0"),
                        Z: i
                    };
                return n.replace(f, (function (t, e) {
                    return e || h[t] || i.replace(":", "")
                }))
            }, p.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }, p.diff = function (t, c, l) {
                var f, d = w.p(c), p = y(t), h = 6e4 * (p.utcOffset() - this.utcOffset()), m = this - p,
                    v = w.m(this, p);
                return v = (f = {}, f[u] = v / 12, f[a] = v, f[s] = v / 3, f[r] = (m - h) / 6048e5, f[o] = (m - h) / 864e5, f[i] = m / 36e5, f[n] = m / 6e4, f[e] = m / 1e3, f)[d] || m, l ? v : w.a(v)
            }, p.daysInMonth = function () {
                return this.endOf(a).$D
            }, p.$locale = function () {
                return v[this.$L]
            }, p.locale = function (t, e) {
                if (!t) return this.$L;
                var n = this.clone(), i = b(t, e, !0);
                return i && (n.$L = i), n
            }, p.clone = function () {
                return w.w(this.$d, this)
            }, p.toDate = function () {
                return new Date(this.valueOf())
            }, p.toJSON = function () {
                return this.isValid() ? this.toISOString() : null
            }, p.toISOString = function () {
                return this.$d.toISOString()
            }, p.toString = function () {
                return this.$d.toUTCString()
            }, d
        }(), O = _.prototype;
        return y.prototype = O, [["$ms", t], ["$s", e], ["$m", n], ["$H", i], ["$W", o], ["$M", a], ["$y", u], ["$D", c]].forEach((function (t) {
            O[t[1]] = function (e) {
                return this.$g(e, t[0], t[1])
            }
        })), y.extend = function (t, e) {
            return t.$i || (t(e, _, y), t.$i = !0), y
        }, y.locale = b, y.isDayjs = g, y.unix = function (t) {
            return y(1e3 * t)
        }, y.en = v[m], y.Ls = v, y.p = {}, y
    }()
}, function (t, e, n) {
    t.exports = function () {
        "use strict";
        return function (t, e, n) {
            var i = e.prototype;
            n.utc = function (t) {
                return new e({date: t, utc: !0, args: arguments})
            }, i.utc = function (t) {
                var e = n(this.toDate(), {locale: this.$L, utc: !0});
                return t ? e.add(this.utcOffset(), "minute") : e
            }, i.local = function () {
                return n(this.toDate(), {locale: this.$L, utc: !1})
            };
            var o = i.parse;
            i.parse = function (t) {
                t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), o.call(this, t)
            };
            var r = i.init;
            i.init = function () {
                if (this.$u) {
                    var t = this.$d;
                    this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds()
                } else r.call(this)
            };
            var a = i.utcOffset;
            i.utcOffset = function (t, e) {
                var n = this.$utils().u;
                if (n(t)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
                var i = Math.abs(t) <= 16 ? 60 * t : t, o = this;
                if (e) return o.$offset = i, o.$u = 0 === t, o;
                if (0 !== t) {
                    var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (o = this.local().add(i + r, "minute")).$offset = i, o.$x.$localOffset = r
                } else o = this.utc();
                return o
            };
            var s = i.format;
            i.format = function (t) {
                var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                return s.call(this, e)
            }, i.valueOf = function () {
                var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * t
            }, i.isUTC = function () {
                return !!this.$u
            }, i.toISOString = function () {
                return this.toDate().toISOString()
            }, i.toString = function () {
                return this.toDate().toUTCString()
            };
            var u = i.toDate;
            i.toDate = function (t) {
                return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : u.call(this)
            };
            var c = i.diff;
            i.diff = function (t, e, i) {
                if (t && this.$u === t.$u) return c.call(this, t, e, i);
                var o = this.local(), r = n(t).local();
                return c.call(o, r, e, i)
            }
        }
    }()
}, function (t, e, n) {
    t.exports = function () {
        "use strict";
        var t, e, n = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            i = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
            o = {
                years: 31536e6,
                months: 2592e6,
                days: 864e5,
                hours: 36e5,
                minutes: 6e4,
                seconds: 1e3,
                milliseconds: 1,
                weeks: 6048e5
            }, r = function (t) {
                return t instanceof f
            }, a = function (t, e, n) {
                return new f(t, n, e.$l)
            }, s = function (t) {
                return e.p(t) + "s"
            }, u = function (t) {
                return t < 0
            }, c = function (t) {
                return u(t) ? Math.ceil(t) : Math.floor(t)
            }, l = function (t, e) {
                return t ? u(t) ? {
                    negative: !0, format: "" + function (t) {
                        return Math.abs(t)
                    }(t) + e
                } : {negative: !1, format: "" + t + e} : {negative: !1, format: ""}
            }, f = function () {
                function u(t, e, n) {
                    var r = this;
                    if (this.$d = {}, this.$l = n, e) return a(t * o[s(e)], this);
                    if ("number" == typeof t) return this.$ms = t, this.parseFromMilliseconds(), this;
                    if ("object" == typeof t) return Object.keys(t).forEach((function (e) {
                        r.$d[s(e)] = t[e]
                    })), this.calMilliseconds(), this;
                    if ("string" == typeof t) {
                        var u = t.match(i);
                        if (u) return this.$d.years = u[2], this.$d.months = u[3], this.$d.weeks = u[4], this.$d.days = u[5], this.$d.hours = u[6], this.$d.minutes = u[7], this.$d.seconds = u[8], this.calMilliseconds(), this
                    }
                    return this
                }

                var f = u.prototype;
                return f.calMilliseconds = function () {
                    var t = this;
                    this.$ms = Object.keys(this.$d).reduce((function (e, n) {
                        return e + (t.$d[n] || 0) * o[n]
                    }), 0)
                }, f.parseFromMilliseconds = function () {
                    var t = this.$ms;
                    this.$d.years = c(t / 31536e6), t %= 31536e6, this.$d.months = c(t / 2592e6), t %= 2592e6, this.$d.days = c(t / 864e5), t %= 864e5, this.$d.hours = c(t / 36e5), t %= 36e5, this.$d.minutes = c(t / 6e4), t %= 6e4, this.$d.seconds = c(t / 1e3), t %= 1e3, this.$d.milliseconds = t
                }, f.toISOString = function () {
                    var t = l(this.$d.years, "Y"), e = l(this.$d.months, "M"), n = +this.$d.days || 0;
                    this.$d.weeks && (n += 7 * this.$d.weeks);
                    var i = l(n, "D"), o = l(this.$d.hours, "H"), r = l(this.$d.minutes, "M"), a = this.$d.seconds || 0;
                    this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
                    var s = l(a, "S"), u = t.negative || e.negative || i.negative || o.negative || r.negative || s.negative,
                        c = o.format || r.format || s.format ? "T" : "",
                        f = (u ? "-" : "") + "P" + t.format + e.format + i.format + c + o.format + r.format + s.format;
                    return "P" === f || "-P" === f ? "P0D" : f
                }, f.toJSON = function () {
                    return this.toISOString()
                }, f.format = function (t) {
                    var i = t || "YYYY-MM-DDTHH:mm:ss", o = {
                        Y: this.$d.years,
                        YY: e.s(this.$d.years, 2, "0"),
                        YYYY: e.s(this.$d.years, 4, "0"),
                        M: this.$d.months,
                        MM: e.s(this.$d.months, 2, "0"),
                        D: this.$d.days,
                        DD: e.s(this.$d.days, 2, "0"),
                        H: this.$d.hours,
                        HH: e.s(this.$d.hours, 2, "0"),
                        m: this.$d.minutes,
                        mm: e.s(this.$d.minutes, 2, "0"),
                        s: this.$d.seconds,
                        ss: e.s(this.$d.seconds, 2, "0"),
                        SSS: e.s(this.$d.milliseconds, 3, "0")
                    };
                    return i.replace(n, (function (t, e) {
                        return e || String(o[t])
                    }))
                }, f.as = function (t) {
                    return this.$ms / o[s(t)]
                }, f.get = function (t) {
                    var e = this.$ms, n = s(t);
                    return "milliseconds" === n ? e %= 1e3 : e = "weeks" === n ? c(e / o[n]) : this.$d[n], 0 === e ? 0 : e
                }, f.add = function (t, e, n) {
                    var i;
                    return i = e ? t * o[s(e)] : r(t) ? t.$ms : a(t, this).$ms, a(this.$ms + i * (n ? -1 : 1), this)
                }, f.subtract = function (t, e) {
                    return this.add(t, e, !0)
                }, f.locale = function (t) {
                    var e = this.clone();
                    return e.$l = t, e
                }, f.clone = function () {
                    return a(this.$ms, this)
                }, f.humanize = function (e) {
                    return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                }, f.milliseconds = function () {
                    return this.get("milliseconds")
                }, f.asMilliseconds = function () {
                    return this.as("milliseconds")
                }, f.seconds = function () {
                    return this.get("seconds")
                }, f.asSeconds = function () {
                    return this.as("seconds")
                }, f.minutes = function () {
                    return this.get("minutes")
                }, f.asMinutes = function () {
                    return this.as("minutes")
                }, f.hours = function () {
                    return this.get("hours")
                }, f.asHours = function () {
                    return this.as("hours")
                }, f.days = function () {
                    return this.get("days")
                }, f.asDays = function () {
                    return this.as("days")
                }, f.weeks = function () {
                    return this.get("weeks")
                }, f.asWeeks = function () {
                    return this.as("weeks")
                }, f.months = function () {
                    return this.get("months")
                }, f.asMonths = function () {
                    return this.as("months")
                }, f.years = function () {
                    return this.get("years")
                }, f.asYears = function () {
                    return this.as("years")
                }, u
            }();
        return function (n, i, o) {
            t = o, e = o().$utils(), o.duration = function (t, e) {
                var n = o.locale();
                return a(t, {$l: n}, e)
            }, o.isDuration = r;
            var s = i.prototype.add, u = i.prototype.subtract;
            i.prototype.add = function (t, e) {
                return r(t) && (t = t.asMilliseconds()), s.bind(this)(t, e)
            }, i.prototype.subtract = function (t, e) {
                return r(t) && (t = t.asMilliseconds()), u.bind(this)(t, e)
            }
        }
    }()
}, function (t, e, n) {
    t.exports = function () {
        "use strict";
        var t = {year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5}, e = {};
        return function (n, i, o) {
            var r, a = o().utcOffset(), s = function (t, n, i) {
                void 0 === i && (i = {});
                var o = new Date(t);
                return function (t, n) {
                    void 0 === n && (n = {});
                    var i = n.timeZoneName || "short", o = t + "|" + i, r = e[o];
                    return r || (r = new Intl.DateTimeFormat("en-US", {
                        hour12: !1,
                        timeZone: t,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: i
                    }), e[o] = r), r
                }(n, i).formatToParts(o)
            }, u = function (e, n) {
                for (var i = s(e, n), r = [], a = 0; a < i.length; a += 1) {
                    var u = i[a], c = u.type, l = u.value, f = t[c];
                    f >= 0 && (r[f] = parseInt(l, 10))
                }
                var d = r[3], p = 24 === d ? 0 : d,
                    h = r[0] + "-" + r[1] + "-" + r[2] + " " + p + ":" + r[4] + ":" + r[5] + ":000", m = +e;
                return (o.utc(h).valueOf() - (m -= m % 1e3)) / 6e4
            }, c = i.prototype;
            c.tz = function (t, e) {
                void 0 === t && (t = r);
                var n = this.utcOffset(), i = this.toDate().toLocaleString("en-US", {timeZone: t}),
                    s = Math.round((this.toDate() - new Date(i)) / 1e3 / 60),
                    u = o(i).$set("millisecond", this.$ms).utcOffset(a - s, !0);
                if (e) {
                    var c = u.utcOffset();
                    u = u.add(n - c, "minute")
                }
                return u.$x.$timezone = t, u
            }, c.offsetName = function (t) {
                var e = this.$x.$timezone || o.tz.guess(),
                    n = s(this.valueOf(), e, {timeZoneName: t}).find((function (t) {
                        return "timezonename" === t.type.toLowerCase()
                    }));
                return n && n.value
            };
            var l = c.startOf;
            c.startOf = function (t, e) {
                if (!this.$x || !this.$x.$timezone) return l.call(this, t, e);
                var n = o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                return l.call(n, t, e).tz(this.$x.$timezone, !0)
            }, o.tz = function (t, e, n) {
                var i = n && e, a = n || e || r, s = u(+o(), a);
                if ("string" != typeof t) return o(t).tz(a);
                var c = function (t, e, n) {
                    var i = t - 60 * e * 1e3, o = u(i, n);
                    if (e === o) return [i, e];
                    var r = u(i -= 60 * (o - e) * 1e3, n);
                    return o === r ? [i, o] : [t - 60 * Math.min(o, r) * 1e3, Math.max(o, r)]
                }(o.utc(t, i).valueOf(), s, a), l = c[0], f = c[1], d = o(l).utcOffset(f);
                return d.$x.$timezone = a, d
            }, o.tz.guess = function () {
                return Intl.DateTimeFormat().resolvedOptions().timeZone
            }, o.tz.setDefault = function (t) {
                r = t
            }
        }
    }()
}, , , function (t, e, n) {
    t.exports = n(9)
}, , function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(0), o = window.jQuery, r = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
        a = {
            autocompleteLoading: function (t) {
                !0 !== t ? o("#input-users").removeClass("ui-autocomplete-loading") : o("#input-users").addClass("ui-autocomplete-loading")
            }, saveLoading: function (t) {
                t ? (o(".wa-save").addClass("disabled"), o(".wa-save span").addClass("dashicons dashicons-update wa-save-loading")) : (o(".wa-save").removeClass("disabled"), o(".wa-save span").removeClass("dashicons dashicons-update wa-save-loading"))
            }, parseUtcOffset: function (t) {
                var e, n, i = t.split(":");
                return 2 === i.length ? (e = parseInt(i[0]), n = parseInt(i[1])) : (e = parseInt(i[0]), n = 0), -1 !== t.indexOf("-") ? -(60 * Math.abs(e) + n) : 60 * e + n
            }, parseTime: function (t) {
                var e = (t || "").split(":");
                return e.length >= 2 ? {hours: parseInt(e[0], 10), minutes: parseInt(e[1], 10)} : null
            }, compareTime: function (t, e) {
                var n = this.parseTime(t), i = this.parseTime(e), o = n.minutes + 60 * n.hours,
                    r = i.minutes + 60 * i.hours;
                return o === r ? 0 : o > r ? 1 : -1
            }, hasNumber: function (t) {
                return /\d/.test(t)
            }, calcDiffDuration: function (t, e) {
                return 1e3 * (3600 * (t.hour - e.hour) + 60 * (t.minute - e.minute))
            }, getBackTime: function (t) {
                var e;
                if ("ON" === t.isAlwaysAvailable) return "online";
                e = this.hasNumber(rjte_wa.timezone) ? Object(i.a)().utcOffset(this.parseUtcOffset(rjte_wa.timezone)) : Object(i.a)(Object(i.a)()).tz(rjte_wa.timezone, !0);
                var n = r[e.get("day")], o = t.daysOfWeekWorking[n];
                if ("OFF" === o.isWorkingOnDay) return t.dayOffsText;
                for (var a = 0; a < o.workHours.length; a++) {
                    var s = e.get("hour") + ":" + e.get("minute"), u = o.workHours[a].startTime,
                        c = o.workHours[a].endTime;
                    if (-1 === this.compareTime(s, u)) {
                        var l = this.parseTime(u), f = this.calcDiffDuration({hour: l.hours, minute: l.minutes}, {
                            hour: e.get("hour"),
                            minute: e.get("minute")
                        }), d = i.a.duration(f), p = " " + d.get("hours") + ":" + d.get("minutes") + " ";
                        return t.willBeBackText.replace(/\[rj_working_time\]/gi, p)
                    }
                    if (0 === this.compareTime(s, u) || 0 === this.compareTime(s, c)) return "online";
                    if (1 === this.compareTime(s, u) && -1 === this.compareTime(s, c)) return "online"
                }
                return t.dayOffsText
            }
        };

    function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    var u = window.jQuery,
        c = [["sunday", "Sun"], ["monday", "Mon"], ["tuesday", "Tue"], ["wednesday", "Wed"], ["thursday", "Thur"], ["friday", "Fri"], ["saturday", "Sat"]],
        l = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (null !== t) return Backbone.View.extend({
                template: _.template(u(t).html()), initialize: function () {
                    this.render()
                }, render: function () {
                    return this.$el.html(this.template({account: this.model, daysOfWeek: c})), this
                }
            })
        }, f = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            if (null !== t) return Backbone.View.extend({
                template: _.template(u(t).html()), initialize: function () {
                    this.render()
                }, registerSortable: function () {
                    void 0 === u("#sortable").sortable("instance") && u("#sortable").sortable({
                        update: function (t, e) {
                            var n = u("#sortable").sortable("toArray", {attribute: "data-index"});
                            u.ajax({
                                url: rjte_wa.url,
                                type: "POST",
                                data: {
                                    action: "rj_te_set_account_position",
                                    type: rjte_wa.selectedAccounts.attrPosition,
                                    positions: n,
                                    nonce: rjte_wa.nonce
                                },
                                beforeSend: function () {
                                    a.autocompleteLoading(!0)
                                }
                            }).done((function (t) {
                                a.autocompleteLoading(!1), t.success
                            }))
                        }
                    })
                }, render: function () {
                    var t = _.sortBy(this.collection.active(), rjte_wa.selectedAccounts.attrPosition);
                    return this.$el.html(this.template({activeAccounts: t, daysOfWeek: c})), this.registerSortable(), this
                }
            })
        };

    function d(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(n), !0).forEach((function (e) {
                h(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function h(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    var m = window.jQuery, v = window.rjte_wa.settings.widget.styles, g = window.buttonStyles,
        b = Backbone.Model.extend({defaults: p({}, v), isLaunch: !1}), y = Backbone.Model.extend({defaults: p({}, g)}),
        w = Backbone.Model.extend({
            idAttribute: "accountId",
            url: rjte_wa.url,
            defaults: {
                accountId: "",
                avatar: "",
                accountName: "",
                dayOffsText: "",
                daysOfWeekWorking: [],
                isAlwaysAvailable: "ON",
                number: "",
                predefinedText: "",
                title: "",
                wc_position: "",
                wc_show: "OFF",
                widget_position: "",
                widget_show: "OFF",
                willBeBackText: ""
            },
            setActive: function (t) {
                this.save(null, {
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    data: m.param({
                        action: "rj_te_set_account_status",
                        nonce: rjte_wa.nonce,
                        status: "ON",
                        accountId: this.get("accountId"),
                        type: rjte_wa.selectedAccounts.attrActive
                    }),
                    beforeSend: function () {
                        a.autocompleteLoading(!0)
                    },
                    success: function (e, n) {
                        a.autocompleteLoading(!1), n.success ? (e.set(rjte_wa.selectedAccounts.attrActive, "ON"), t.onDone()) : console.log("Can't update active!")
                    },
                    error: function (t, e) {
                        a.autocompleteLoading(!1), console.log("Something went wrong!")
                    }
                })
            },
            setDeactive: function (t) {
                this.save(null, {
                    type: "POST",
                    contentType: "application/x-www-form-urlencoded",
                    data: m.param({
                        action: "rj_te_set_account_status",
                        nonce: rjte_wa.nonce,
                        status: "OFF",
                        accountId: this.get("accountId"),
                        type: rjte_wa.selectedAccounts.attrActive
                    }),
                    beforeSend: function () {
                        a.autocompleteLoading(!0)
                    },
                    success: function (e, n) {
                        a.autocompleteLoading(!1), n.success ? (e.set(rjte_wa.selectedAccounts.attrActive, "OFF"), t.onDone()) : console.log("Can't update active!")
                    },
                    error: function (t, e) {
                        a.autocompleteLoading(!1), console.log("Something went wrong!")
                    }
                })
            }
        });

    function O(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    var x = Backbone.Collection.extend({
        url: rjte_wa.url, parse: function (t) {
            return t.data
        }, deactive: function () {
            return this.where(O({}, rjte_wa.selectedAccounts.attrActive, "OFF")).map((function (t) {
                return t.toJSON()
            }))
        }, active: function () {
            return this.where(O({}, rjte_wa.selectedAccounts.attrActive, "ON")).map((function (t) {
                return t.attributes.status = a.getBackTime(t.attributes), t.toJSON()
            }))
        }, model: w
    });

    function $(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function D(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function k(t) {
        var e = D(t);
        return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
    }

    function T(t) {
        return t instanceof D(t).Element || t instanceof Element
    }

    function C(t) {
        return t instanceof D(t).HTMLElement || t instanceof HTMLElement
    }

    function S(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof D(t).ShadowRoot || t instanceof ShadowRoot)
    }

    function j(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function A(t) {
        return ((T(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function M(t) {
        return $(A(t)).left + k(t).scrollLeft
    }

    function E(t) {
        return D(t).getComputedStyle(t)
    }

    function L(t) {
        var e = E(t), n = e.overflow, i = e.overflowX, o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }

    function P(t, e, n) {
        void 0 === n && (n = !1);
        var i, o, r = A(e), a = $(t), s = C(e), u = {scrollLeft: 0, scrollTop: 0}, c = {x: 0, y: 0};
        return (s || !s && !n) && (("body" !== j(e) || L(r)) && (u = (i = e) !== D(i) && C(i) ? {
            scrollLeft: (o = i).scrollLeft,
            scrollTop: o.scrollTop
        } : k(i)), C(e) ? ((c = $(e)).x += e.clientLeft, c.y += e.clientTop) : r && (c.x = M(r))), {
            x: a.left + u.scrollLeft - c.x,
            y: a.top + u.scrollTop - c.y,
            width: a.width,
            height: a.height
        }
    }

    function B(t) {
        var e = $(t), n = t.offsetWidth, i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }

    function I(t) {
        return "html" === j(t) ? t : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || A(t)
    }

    function H(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = function t(e) {
                return ["html", "body", "#document"].indexOf(j(e)) >= 0 ? e.ownerDocument.body : C(e) && L(e) ? e : t(I(e))
            }(t), o = i === (null == (n = t.ownerDocument) ? void 0 : n.body), r = D(i),
            a = o ? [r].concat(r.visualViewport || [], L(i) ? i : []) : i, s = e.concat(a);
        return o ? s : s.concat(H(I(a)))
    }

    function W(t) {
        return ["table", "td", "th"].indexOf(j(t)) >= 0
    }

    function N(t) {
        return C(t) && "fixed" !== E(t).position ? t.offsetParent : null
    }

    function Y(t) {
        for (var e = D(t), n = N(t); n && W(n) && "static" === E(n).position;) n = N(n);
        return n && ("html" === j(n) || "body" === j(n) && "static" === E(n).position) ? e : n || function (t) {
            for (var e = navigator.userAgent.toLowerCase().includes("firefox"), n = I(t); C(n) && ["html", "body"].indexOf(j(n)) < 0;) {
                var i = E(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || ["transform", "perspective"].includes(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
                n = n.parentNode
            }
            return null
        }(t) || e
    }

    var V = "top", z = "bottom", F = "right", U = "left", R = [V, z, F, U], q = R.reduce((function (t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []), Q = [].concat(R, ["auto"]).reduce((function (t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        Z = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function J(t) {
        var e = new Map, n = new Set, i = [];
        return t.forEach((function (t) {
            e.set(t.name, t)
        })), t.forEach((function (t) {
            n.has(t.name) || function t(o) {
                n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function (i) {
                    if (!n.has(i)) {
                        var o = e.get(i);
                        o && t(o)
                    }
                })), i.push(o)
            }(t)
        })), i
    }

    var G = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function X() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function K(t) {
        void 0 === t && (t = {});
        var e = t, n = e.defaultModifiers, i = void 0 === n ? [] : n, o = e.defaultOptions, r = void 0 === o ? G : o;
        return function (t, e, n) {
            void 0 === n && (n = r);
            var o, a, s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, G, r),
                modifiersData: {},
                elements: {reference: t, popper: e},
                attributes: {},
                styles: {}
            }, u = [], c = !1, l = {
                state: s, setOptions: function (n) {
                    f(), s.options = Object.assign({}, r, s.options, n), s.scrollParents = {
                        reference: T(t) ? H(t) : t.contextElement ? H(t.contextElement) : [],
                        popper: H(e)
                    };
                    var o = function (t) {
                        var e = J(t);
                        return Z.reduce((function (t, n) {
                            return t.concat(e.filter((function (t) {
                                return t.phase === n
                            })))
                        }), [])
                    }(function (t) {
                        var e = t.reduce((function (t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign({}, n, e, {
                                options: Object.assign({}, n.options, e.options),
                                data: Object.assign({}, n.data, e.data)
                            }) : e, t
                        }), {});
                        return Object.keys(e).map((function (t) {
                            return e[t]
                        }))
                    }([].concat(i, s.options.modifiers)));
                    return s.orderedModifiers = o.filter((function (t) {
                        return t.enabled
                    })), s.orderedModifiers.forEach((function (t) {
                        var e = t.name, n = t.options, i = void 0 === n ? {} : n, o = t.effect;
                        if ("function" == typeof o) {
                            var r = o({state: s, name: e, instance: l, options: i});
                            u.push(r || function () {
                            })
                        }
                    })), l.update()
                }, forceUpdate: function () {
                    if (!c) {
                        var t = s.elements, e = t.reference, n = t.popper;
                        if (X(e, n)) {
                            s.rects = {
                                reference: P(e, Y(n), "fixed" === s.options.strategy),
                                popper: B(n)
                            }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach((function (t) {
                                return s.modifiersData[t.name] = Object.assign({}, t.data)
                            }));
                            for (var i = 0; i < s.orderedModifiers.length; i++) if (!0 !== s.reset) {
                                var o = s.orderedModifiers[i], r = o.fn, a = o.options, u = void 0 === a ? {} : a,
                                    f = o.name;
                                "function" == typeof r && (s = r({state: s, options: u, name: f, instance: l}) || s)
                            } else s.reset = !1, i = -1
                        }
                    }
                }, update: (o = function () {
                    return new Promise((function (t) {
                        l.forceUpdate(), t(s)
                    }))
                }, function () {
                    return a || (a = new Promise((function (t) {
                        Promise.resolve().then((function () {
                            a = void 0, t(o())
                        }))
                    }))), a
                }), destroy: function () {
                    f(), c = !0
                }
            };
            if (!X(t, e)) return l;

            function f() {
                u.forEach((function (t) {
                    return t()
                })), u = []
            }

            return l.setOptions(n).then((function (t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            })), l
        }
    }

    var tt = {passive: !0};
    var et = {
        name: "eventListeners", enabled: !0, phase: "write", fn: function () {
        }, effect: function (t) {
            var e = t.state, n = t.instance, i = t.options, o = i.scroll, r = void 0 === o || o, a = i.resize,
                s = void 0 === a || a, u = D(e.elements.popper),
                c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return r && c.forEach((function (t) {
                t.addEventListener("scroll", n.update, tt)
            })), s && u.addEventListener("resize", n.update, tt), function () {
                r && c.forEach((function (t) {
                    t.removeEventListener("scroll", n.update, tt)
                })), s && u.removeEventListener("resize", n.update, tt)
            }
        }, data: {}
    };

    function nt(t) {
        return t.split("-")[0]
    }

    function it(t) {
        return t.split("-")[1]
    }

    function ot(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function rt(t) {
        var e, n = t.reference, i = t.element, o = t.placement, r = o ? nt(o) : null, a = o ? it(o) : null,
            s = n.x + n.width / 2 - i.width / 2, u = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case V:
                e = {x: s, y: n.y - i.height};
                break;
            case z:
                e = {x: s, y: n.y + n.height};
                break;
            case F:
                e = {x: n.x + n.width, y: u};
                break;
            case U:
                e = {x: n.x - i.width, y: u};
                break;
            default:
                e = {x: n.x, y: n.y}
        }
        var c = r ? ot(r) : null;
        if (null != c) {
            var l = "y" === c ? "height" : "width";
            switch (a) {
                case"start":
                    e[c] = e[c] - (n[l] / 2 - i[l] / 2);
                    break;
                case"end":
                    e[c] = e[c] + (n[l] / 2 - i[l] / 2)
            }
        }
        return e
    }

    var at = {
        name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
            var e = t.state, n = t.name;
            e.modifiersData[n] = rt({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        }, data: {}
    }, st = Math.max, ut = Math.min, ct = Math.round, lt = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function ft(t) {
        var e, n = t.popper, i = t.popperRect, o = t.placement, r = t.offsets, a = t.position, s = t.gpuAcceleration,
            u = t.adaptive, c = t.roundOffsets, l = !0 === c ? function (t) {
                var e = t.x, n = t.y, i = window.devicePixelRatio || 1;
                return {x: ct(ct(e * i) / i) || 0, y: ct(ct(n * i) / i) || 0}
            }(r) : "function" == typeof c ? c(r) : r, f = l.x, d = void 0 === f ? 0 : f, p = l.y, h = void 0 === p ? 0 : p,
            m = r.hasOwnProperty("x"), v = r.hasOwnProperty("y"), g = U, b = V, y = window;
        if (u) {
            var w = Y(n), _ = "clientHeight", O = "clientWidth";
            w === D(n) && "static" !== E(w = A(n)).position && (_ = "scrollHeight", O = "scrollWidth"), w = w, o === V && (b = z, h -= w[_] - i.height, h *= s ? 1 : -1), o === U && (g = F, d -= w[O] - i.width, d *= s ? 1 : -1)
        }
        var x, $ = Object.assign({position: a}, u && lt);
        return s ? Object.assign({}, $, ((x = {})[b] = v ? "0" : "", x[g] = m ? "0" : "", x.transform = (y.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + h + "px)" : "translate3d(" + d + "px, " + h + "px, 0)", x)) : Object.assign({}, $, ((e = {})[b] = v ? h + "px" : "", e[g] = m ? d + "px" : "", e.transform = "", e))
    }

    var dt = {
        name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function (t) {
                var n = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
                C(o) && j(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function (t) {
                    var e = i[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                })))
            }))
        }, effect: function (t) {
            var e = t.state, n = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
                Object.keys(e.elements).forEach((function (t) {
                    var i = e.elements[t], o = e.attributes[t] || {},
                        r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function (t, e) {
                            return t[e] = "", t
                        }), {});
                    C(i) && j(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function (t) {
                        i.removeAttribute(t)
                    })))
                }))
            }
        }, requires: ["computeStyles"]
    };
    var pt = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function ht(t) {
        return t.replace(/left|right|bottom|top/g, (function (t) {
            return pt[t]
        }))
    }

    var mt = {start: "end", end: "start"};

    function vt(t) {
        return t.replace(/start|end/g, (function (t) {
            return mt[t]
        }))
    }

    function gt(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (n && S(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function bt(t) {
        return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
    }

    function yt(t, e) {
        return "viewport" === e ? bt(function (t) {
            var e = D(t), n = A(t), i = e.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, s = 0;
            return i && (o = i.width, r = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = i.offsetLeft, s = i.offsetTop)), {
                width: o,
                height: r,
                x: a + M(t),
                y: s
            }
        }(t)) : C(e) ? function (t) {
            var e = $(t);
            return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
        }(e) : bt(function (t) {
            var e, n = A(t), i = k(t), o = null == (e = t.ownerDocument) ? void 0 : e.body,
                r = st(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                a = st(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                s = -i.scrollLeft + M(t), u = -i.scrollTop;
            return "rtl" === E(o || n).direction && (s += st(n.clientWidth, o ? o.clientWidth : 0) - r), {
                width: r,
                height: a,
                x: s,
                y: u
            }
        }(A(t)))
    }

    function wt(t, e, n) {
        var i = "clippingParents" === e ? function (t) {
            var e = H(I(t)), n = ["absolute", "fixed"].indexOf(E(t).position) >= 0 && C(t) ? Y(t) : t;
            return T(n) ? e.filter((function (t) {
                return T(t) && gt(t, n) && "body" !== j(t)
            })) : []
        }(t) : [].concat(e), o = [].concat(i, [n]), r = o[0], a = o.reduce((function (e, n) {
            var i = yt(t, n);
            return e.top = st(i.top, e.top), e.right = ut(i.right, e.right), e.bottom = ut(i.bottom, e.bottom), e.left = st(i.left, e.left), e
        }), yt(t, r));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
    }

    function _t(t) {
        return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
    }

    function Ot(t, e) {
        return e.reduce((function (e, n) {
            return e[n] = t, e
        }), {})
    }

    function xt(t, e) {
        void 0 === e && (e = {});
        var n = e, i = n.placement, o = void 0 === i ? t.placement : i, r = n.boundary,
            a = void 0 === r ? "clippingParents" : r, s = n.rootBoundary, u = void 0 === s ? "viewport" : s,
            c = n.elementContext, l = void 0 === c ? "popper" : c, f = n.altBoundary, d = void 0 !== f && f,
            p = n.padding, h = void 0 === p ? 0 : p, m = _t("number" != typeof h ? h : Ot(h, R)),
            v = "popper" === l ? "reference" : "popper", g = t.elements.reference, b = t.rects.popper,
            y = t.elements[d ? v : l], w = wt(T(y) ? y : y.contextElement || A(t.elements.popper), a, u), _ = $(g),
            O = rt({reference: _, element: b, strategy: "absolute", placement: o}), x = bt(Object.assign({}, b, O)),
            D = "popper" === l ? x : _, k = {
                top: w.top - D.top + m.top,
                bottom: D.bottom - w.bottom + m.bottom,
                left: w.left - D.left + m.left,
                right: D.right - w.right + m.right
            }, C = t.modifiersData.offset;
        if ("popper" === l && C) {
            var S = C[o];
            Object.keys(k).forEach((function (t) {
                var e = [F, z].indexOf(t) >= 0 ? 1 : -1, n = [V, z].indexOf(t) >= 0 ? "y" : "x";
                k[t] += S[n] * e
            }))
        }
        return k
    }

    function $t(t, e, n) {
        return st(t, ut(e, n))
    }

    function Dt(t, e, n) {
        return void 0 === n && (n = {x: 0, y: 0}), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function kt(t) {
        return [V, F, z, U].some((function (e) {
            return t[e] >= 0
        }))
    }

    var Tt = K({
        defaultModifiers: [et, at, {
            name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
                var e = t.state, n = t.options, i = n.gpuAcceleration, o = void 0 === i || i, r = n.adaptive,
                    a = void 0 === r || r, s = n.roundOffsets, u = void 0 === s || s, c = {
                        placement: nt(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: o
                    };
                null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, ft(Object.assign({}, c, {
                    offsets: e.modifiersData.popperOffsets,
                    position: e.options.strategy,
                    adaptive: a,
                    roundOffsets: u
                })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, ft(Object.assign({}, c, {
                    offsets: e.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: u
                })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
            }, data: {}
        }, dt, {
            name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
                var e = t.state, n = t.options, i = t.name, o = n.offset, r = void 0 === o ? [0, 0] : o,
                    a = Q.reduce((function (t, n) {
                        return t[n] = function (t, e, n) {
                            var i = nt(t), o = [U, V].indexOf(i) >= 0 ? -1 : 1,
                                r = "function" == typeof n ? n(Object.assign({}, e, {placement: t})) : n, a = r[0],
                                s = r[1];
                            return a = a || 0, s = (s || 0) * o, [U, F].indexOf(i) >= 0 ? {x: s, y: a} : {x: a, y: s}
                        }(n, e.rects, r), t
                    }), {}), s = a[e.placement], u = s.x, c = s.y;
                null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += u, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = a
            }
        }, {
            name: "flip", enabled: !0, phase: "main", fn: function (t) {
                var e = t.state, n = t.options, i = t.name;
                if (!e.modifiersData[i]._skip) {
                    for (var o = n.mainAxis, r = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, u = n.fallbackPlacements, c = n.padding, l = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, h = void 0 === p || p, m = n.allowedAutoPlacements, v = e.options.placement, g = nt(v), b = u || (g === v || !h ? [ht(v)] : function (t) {
                        if ("auto" === nt(t)) return [];
                        var e = ht(t);
                        return [vt(t), e, vt(e)]
                    }(v)), y = [v].concat(b).reduce((function (t, n) {
                        return t.concat("auto" === nt(n) ? function (t, e) {
                            void 0 === e && (e = {});
                            var n = e, i = n.placement, o = n.boundary, r = n.rootBoundary, a = n.padding,
                                s = n.flipVariations, u = n.allowedAutoPlacements, c = void 0 === u ? Q : u, l = it(i),
                                f = l ? s ? q : q.filter((function (t) {
                                    return it(t) === l
                                })) : R, d = f.filter((function (t) {
                                    return c.indexOf(t) >= 0
                                }));
                            0 === d.length && (d = f);
                            var p = d.reduce((function (e, n) {
                                return e[n] = xt(t, {placement: n, boundary: o, rootBoundary: r, padding: a})[nt(n)], e
                            }), {});
                            return Object.keys(p).sort((function (t, e) {
                                return p[t] - p[e]
                            }))
                        }(e, {
                            placement: n,
                            boundary: l,
                            rootBoundary: f,
                            padding: c,
                            flipVariations: h,
                            allowedAutoPlacements: m
                        }) : n)
                    }), []), w = e.rects.reference, _ = e.rects.popper, O = new Map, x = !0, $ = y[0], D = 0; D < y.length; D++) {
                        var k = y[D], T = nt(k), C = "start" === it(k), S = [V, z].indexOf(T) >= 0,
                            j = S ? "width" : "height",
                            A = xt(e, {placement: k, boundary: l, rootBoundary: f, altBoundary: d, padding: c}),
                            M = S ? C ? F : U : C ? z : V;
                        w[j] > _[j] && (M = ht(M));
                        var E = ht(M), L = [];
                        if (r && L.push(A[T] <= 0), s && L.push(A[M] <= 0, A[E] <= 0), L.every((function (t) {
                            return t
                        }))) {
                            $ = k, x = !1;
                            break
                        }
                        O.set(k, L)
                    }
                    if (x) for (var P = function (t) {
                        var e = y.find((function (e) {
                            var n = O.get(e);
                            if (n) return n.slice(0, t).every((function (t) {
                                return t
                            }))
                        }));
                        if (e) return $ = e, "break"
                    }, B = h ? 3 : 1; B > 0; B--) {
                        if ("break" === P(B)) break
                    }
                    e.placement !== $ && (e.modifiersData[i]._skip = !0, e.placement = $, e.reset = !0)
                }
            }, requiresIfExists: ["offset"], data: {_skip: !1}
        }, {
            name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
                var e = t.state, n = t.options, i = t.name, o = n.mainAxis, r = void 0 === o || o, a = n.altAxis,
                    s = void 0 !== a && a, u = n.boundary, c = n.rootBoundary, l = n.altBoundary, f = n.padding,
                    d = n.tether, p = void 0 === d || d, h = n.tetherOffset, m = void 0 === h ? 0 : h,
                    v = xt(e, {boundary: u, rootBoundary: c, padding: f, altBoundary: l}), g = nt(e.placement),
                    b = it(e.placement), y = !b, w = ot(g), _ = "x" === w ? "y" : "x",
                    O = e.modifiersData.popperOffsets, x = e.rects.reference, $ = e.rects.popper,
                    D = "function" == typeof m ? m(Object.assign({}, e.rects, {placement: e.placement})) : m,
                    k = {x: 0, y: 0};
                if (O) {
                    if (r || s) {
                        var T = "y" === w ? V : U, C = "y" === w ? z : F, S = "y" === w ? "height" : "width", j = O[w],
                            A = O[w] + v[T], M = O[w] - v[C], E = p ? -$[S] / 2 : 0, L = "start" === b ? x[S] : $[S],
                            P = "start" === b ? -$[S] : -x[S], I = e.elements.arrow,
                            H = p && I ? B(I) : {width: 0, height: 0},
                            W = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, N = W[T], R = W[C], q = $t(0, x[S], H[S]),
                            Q = y ? x[S] / 2 - E - q - N - D : L - q - N - D,
                            Z = y ? -x[S] / 2 + E + q + R + D : P + q + R + D,
                            J = e.elements.arrow && Y(e.elements.arrow),
                            G = J ? "y" === w ? J.clientTop || 0 : J.clientLeft || 0 : 0,
                            X = e.modifiersData.offset ? e.modifiersData.offset[e.placement][w] : 0,
                            K = O[w] + Q - X - G, tt = O[w] + Z - X;
                        if (r) {
                            var et = $t(p ? ut(A, K) : A, j, p ? st(M, tt) : M);
                            O[w] = et, k[w] = et - j
                        }
                        if (s) {
                            var rt = "x" === w ? V : U, at = "x" === w ? z : F, ct = O[_], lt = ct + v[rt],
                                ft = ct - v[at], dt = $t(p ? ut(lt, K) : lt, ct, p ? st(ft, tt) : ft);
                            O[_] = dt, k[_] = dt - ct
                        }
                    }
                    e.modifiersData[i] = k
                }
            }, requiresIfExists: ["offset"]
        }, {
            name: "arrow", enabled: !0, phase: "main", fn: function (t) {
                var e, n = t.state, i = t.name, o = t.options, r = n.elements.arrow, a = n.modifiersData.popperOffsets,
                    s = nt(n.placement), u = ot(s), c = [U, F].indexOf(s) >= 0 ? "height" : "width";
                if (r && a) {
                    var l = function (t, e) {
                            return _t("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {placement: e.placement})) : t) ? t : Ot(t, R))
                        }(o.padding, n), f = B(r), d = "y" === u ? V : U, p = "y" === u ? z : F,
                        h = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
                        m = a[u] - n.rects.reference[u], v = Y(r),
                        g = v ? "y" === u ? v.clientHeight || 0 : v.clientWidth || 0 : 0, b = h / 2 - m / 2, y = l[d],
                        w = g - f[c] - l[p], _ = g / 2 - f[c] / 2 + b, O = $t(y, _, w), x = u;
                    n.modifiersData[i] = ((e = {})[x] = O, e.centerOffset = O - _, e)
                }
            }, effect: function (t) {
                var e = t.state, n = t.options.element, i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && gt(e.elements.popper, i) && (e.elements.arrow = i)
            }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
        }, {
            name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
                var e = t.state, n = t.name, i = e.rects.reference, o = e.rects.popper,
                    r = e.modifiersData.preventOverflow, a = xt(e, {elementContext: "reference"}),
                    s = xt(e, {altBoundary: !0}), u = Dt(a, i), c = Dt(s, o, r), l = kt(u), f = kt(c);
                e.modifiersData[n] = {
                    referenceClippingOffsets: u,
                    popperEscapeOffsets: c,
                    isReferenceHidden: l,
                    hasPopperEscaped: f
                }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": l,
                    "data-popper-escaped": f
                })
            }
        }]
    }), Ct = {passive: !0, capture: !0};

    function St(t, e, n) {
        if (Array.isArray(t)) {
            var i = t[e];
            return null == i ? Array.isArray(n) ? n[e] : n : i
        }
        return t
    }

    function jt(t, e) {
        var n = {}.toString.call(t);
        return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1
    }

    function At(t, e) {
        return "function" == typeof t ? t.apply(void 0, e) : t
    }

    function Mt(t, e) {
        return 0 === e ? t : function (i) {
            clearTimeout(n), n = setTimeout((function () {
                t(i)
            }), e)
        };
        var n
    }

    function Et(t) {
        return [].concat(t)
    }

    function Lt(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }

    function Pt(t) {
        return t.split("-")[0]
    }

    function Bt(t) {
        return [].slice.call(t)
    }

    function It() {
        return document.createElement("div")
    }

    function Ht(t) {
        return ["Element", "Fragment"].some((function (e) {
            return jt(t, e)
        }))
    }

    function Wt(t) {
        return jt(t, "MouseEvent")
    }

    function Nt(t) {
        return !(!t || !t._tippy || t._tippy.reference !== t)
    }

    function Yt(t) {
        return Ht(t) ? [t] : function (t) {
            return jt(t, "NodeList")
        }(t) ? Bt(t) : Array.isArray(t) ? t : Bt(document.querySelectorAll(t))
    }

    function Vt(t, e) {
        t.forEach((function (t) {
            t && (t.style.transitionDuration = e + "ms")
        }))
    }

    function zt(t, e) {
        t.forEach((function (t) {
            t && t.setAttribute("data-state", e)
        }))
    }

    function Ft(t) {
        var e, n = Et(t)[0];
        return (null == n || null == (e = n.ownerDocument) ? void 0 : e.body) ? n.ownerDocument : document
    }

    function Ut(t, e, n) {
        var i = e + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach((function (e) {
            t[i](e, n)
        }))
    }

    var Rt = {isTouch: !1}, qt = 0;

    function Qt() {
        Rt.isTouch || (Rt.isTouch = !0, window.performance && document.addEventListener("mousemove", Zt))
    }

    function Zt() {
        var t = performance.now();
        t - qt < 20 && (Rt.isTouch = !1, document.removeEventListener("mousemove", Zt)), qt = t
    }

    function Jt() {
        var t = document.activeElement;
        if (Nt(t)) {
            var e = t._tippy;
            t.blur && !e.state.isVisible && t.blur()
        }
    }

    var Gt = "undefined" != typeof window && "undefined" != typeof document ? navigator.userAgent : "",
        Xt = /MSIE |Trident\//.test(Gt);
    var Kt = {animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1}, te = Object.assign({
        appendTo: function () {
            return document.body
        },
        aria: {content: "auto", expanded: "auto"},
        delay: 0,
        duration: [300, 250],
        getReferenceClientRect: null,
        hideOnClick: !0,
        ignoreAttributes: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        moveTransition: "",
        offset: [0, 10],
        onAfterUpdate: function () {
        },
        onBeforeUpdate: function () {
        },
        onCreate: function () {
        },
        onDestroy: function () {
        },
        onHidden: function () {
        },
        onHide: function () {
        },
        onMount: function () {
        },
        onShow: function () {
        },
        onShown: function () {
        },
        onTrigger: function () {
        },
        onUntrigger: function () {
        },
        onClickOutside: function () {
        },
        placement: "top",
        plugins: [],
        popperOptions: {},
        render: null,
        showOnCreate: !1,
        touch: !0,
        trigger: "mouseenter focus",
        triggerTarget: null
    }, Kt, {}, {
        allowHTML: !1,
        animation: "fade",
        arrow: !0,
        content: "",
        inertia: !1,
        maxWidth: 350,
        role: "tooltip",
        theme: "",
        zIndex: 9999
    }), ee = Object.keys(te);

    function ne(t) {
        var e = (t.plugins || []).reduce((function (e, n) {
            var i = n.name, o = n.defaultValue;
            return i && (e[i] = void 0 !== t[i] ? t[i] : o), e
        }), {});
        return Object.assign({}, t, {}, e)
    }

    function ie(t, e) {
        var n = Object.assign({}, e, {content: At(e.content, [t])}, e.ignoreAttributes ? {} : function (t, e) {
            return (e ? Object.keys(ne(Object.assign({}, te, {plugins: e}))) : ee).reduce((function (e, n) {
                var i = (t.getAttribute("data-tippy-" + n) || "").trim();
                if (!i) return e;
                if ("content" === n) e[n] = i; else try {
                    e[n] = JSON.parse(i)
                } catch (t) {
                    e[n] = i
                }
                return e
            }), {})
        }(t, e.plugins));
        return n.aria = Object.assign({}, te.aria, {}, n.aria), n.aria = {
            expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
            content: "auto" === n.aria.content ? e.interactive ? null : "describedby" : n.aria.content
        }, n
    }

    function oe(t, e) {
        t.innerHTML = e
    }

    function re(t) {
        var e = It();
        return !0 === t ? e.className = "rjte-tippy-arrow" : (e.className = "rjte-tippy-svg-arrow", Ht(t) ? e.appendChild(t) : oe(e, t)), e
    }

    function ae(t, e) {
        Ht(e.content) ? (oe(t, ""), t.appendChild(e.content)) : "function" != typeof e.content && (e.allowHTML ? oe(t, e.content) : t.textContent = e.content)
    }

    function se(t) {
        var e = t.firstElementChild, n = Bt(e.children);
        return {
            box: e, content: n.find((function (t) {
                return t.classList.contains("rjte-tippy-content")
            })), arrow: n.find((function (t) {
                return t.classList.contains("rjte-tippy-arrow") || t.classList.contains("rjte-tippy-svg-arrow")
            })), backdrop: n.find((function (t) {
                return t.classList.contains("rjte-tippy-backdrop")
            }))
        }
    }

    function ue(t) {
        var e = It(), n = It();
        n.className = "rjte-tippy-box", n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
        var i = It();

        function o(n, i) {
            var o = se(e), r = o.box, a = o.content, s = o.arrow;
            i.theme ? r.setAttribute("data-theme", i.theme) : r.removeAttribute("data-theme"), "string" == typeof i.animation ? r.setAttribute("data-animation", i.animation) : r.removeAttribute("data-animation"), i.inertia ? r.setAttribute("data-inertia", "") : r.removeAttribute("data-inertia"), r.style.maxWidth = "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth, i.role ? r.setAttribute("role", i.role) : r.removeAttribute("role"), n.content === i.content && n.allowHTML === i.allowHTML || ae(a, t.props), i.arrow ? s ? n.arrow !== i.arrow && (r.removeChild(s), r.appendChild(re(i.arrow))) : r.appendChild(re(i.arrow)) : s && r.removeChild(s)
        }

        return i.className = "rjte-tippy-content", i.setAttribute("data-state", "hidden"), ae(i, t.props), e.appendChild(n), n.appendChild(i), o(t.props, t.props), {
            popper: e,
            onUpdate: o
        }
    }

    ue.$$tippy = !0;
    var ce = 1, le = [], fe = [];

    function de(t, e) {
        var n, i, o, r, a, s, u, c, l,
            f = ie(t, Object.assign({}, te, {}, ne((n = e, Object.keys(n).reduce((function (t, e) {
                return void 0 !== n[e] && (t[e] = n[e]), t
            }), {}))))), d = !1, p = !1, h = !1, m = !1, v = [], g = Mt(Q, f.interactiveDebounce), b = ce++,
            y = (l = f.plugins).filter((function (t, e) {
                return l.indexOf(t) === e
            })), w = {
                id: b,
                reference: t,
                popper: It(),
                popperInstance: null,
                props: f,
                state: {isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1},
                plugins: y,
                clearDelayTimeouts: function () {
                    clearTimeout(i), clearTimeout(o), cancelAnimationFrame(r)
                },
                setProps: function (e) {
                    0;
                    if (w.state.isDestroyed) return;
                    L("onBeforeUpdate", [w, e]), R();
                    var n = w.props, i = ie(t, Object.assign({}, w.props, {}, e, {ignoreAttributes: !0}));
                    w.props = i, U(), n.interactiveDebounce !== i.interactiveDebounce && (I(), g = Mt(Q, i.interactiveDebounce));
                    n.triggerTarget && !i.triggerTarget ? Et(n.triggerTarget).forEach((function (t) {
                        t.removeAttribute("aria-expanded")
                    })) : i.triggerTarget && t.removeAttribute("aria-expanded");
                    B(), E(), x && x(n, i);
                    w.popperInstance && (X(), tt().forEach((function (t) {
                        requestAnimationFrame(t._tippy.popperInstance.forceUpdate)
                    })));
                    L("onAfterUpdate", [w, e])
                },
                setContent: function (t) {
                    w.setProps({content: t})
                },
                show: function () {
                    0;
                    var t = w.state.isVisible, e = w.state.isDestroyed, n = !w.state.isEnabled,
                        i = Rt.isTouch && !w.props.touch, o = St(w.props.duration, 0, te.duration);
                    if (t || e || n || i) return;
                    if (S().hasAttribute("disabled")) return;
                    if (L("onShow", [w], !1), !1 === w.props.onShow(w)) return;
                    w.state.isVisible = !0, C() && (O.style.visibility = "visible");
                    E(), Y(), w.state.isMounted || (O.style.transition = "none");
                    if (C()) {
                        var r = A(), a = r.box, s = r.content;
                        Vt([a, s], 0)
                    }
                    u = function () {
                        var t;
                        if (w.state.isVisible && !m) {
                            if (m = !0, O.offsetHeight, O.style.transition = w.props.moveTransition, C() && w.props.animation) {
                                var e = A(), n = e.box, i = e.content;
                                Vt([n, i], o), zt([n, i], "visible")
                            }
                            P(), B(), Lt(fe, w), null == (t = w.popperInstance) || t.forceUpdate(), w.state.isMounted = !0, L("onMount", [w]), w.props.animation && C() && function (t, e) {
                                z(t, e)
                            }(o, (function () {
                                w.state.isShown = !0, L("onShown", [w])
                            }))
                        }
                    }, function () {
                        var t, e = w.props.appendTo, n = S();
                        t = w.props.interactive && e === te.appendTo || "parent" === e ? n.parentNode : At(e, [n]);
                        t.contains(O) || t.appendChild(O);
                        X(), !1
                    }()
                },
                hide: function () {
                    0;
                    var t = !w.state.isVisible, e = w.state.isDestroyed, n = !w.state.isEnabled,
                        i = St(w.props.duration, 1, te.duration);
                    if (t || e || n) return;
                    if (L("onHide", [w], !1), !1 === w.props.onHide(w)) return;
                    w.state.isVisible = !1, w.state.isShown = !1, m = !1, d = !1, C() && (O.style.visibility = "hidden");
                    if (I(), V(), E(), C()) {
                        var o = A(), r = o.box, a = o.content;
                        w.props.animation && (Vt([r, a], i), zt([r, a], "hidden"))
                    }
                    P(), B(), w.props.animation ? C() && function (t, e) {
                        z(t, (function () {
                            !w.state.isVisible && O.parentNode && O.parentNode.contains(O) && e()
                        }))
                    }(i, w.unmount) : w.unmount()
                },
                hideWithInteractivity: function (t) {
                    0;
                    j().addEventListener("mousemove", g), Lt(le, g), g(t)
                },
                enable: function () {
                    w.state.isEnabled = !0
                },
                disable: function () {
                    w.hide(), w.state.isEnabled = !1
                },
                unmount: function () {
                    0;
                    w.state.isVisible && w.hide();
                    if (!w.state.isMounted) return;
                    K(), tt().forEach((function (t) {
                        t._tippy.unmount()
                    })), O.parentNode && O.parentNode.removeChild(O);
                    fe = fe.filter((function (t) {
                        return t !== w
                    })), w.state.isMounted = !1, L("onHidden", [w])
                },
                destroy: function () {
                    0;
                    if (w.state.isDestroyed) return;
                    w.clearDelayTimeouts(), w.unmount(), R(), delete t._tippy, w.state.isDestroyed = !0, L("onDestroy", [w])
                }
            };
        if (!f.render) return w;
        var _ = f.render(w), O = _.popper, x = _.onUpdate;
        O.setAttribute("data-tippy-root", ""), O.id = "tippy-" + w.id, w.popper = O, t._tippy = w, O._tippy = w;
        var $ = y.map((function (t) {
            return t.fn(w)
        })), D = t.hasAttribute("aria-expanded");
        return U(), B(), E(), L("onCreate", [w]), f.showOnCreate && et(), O.addEventListener("mouseenter", (function () {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts()
        })), O.addEventListener("mouseleave", (function (t) {
            w.props.interactive && w.props.trigger.indexOf("mouseenter") >= 0 && (j().addEventListener("mousemove", g), g(t))
        })), w;

        function k() {
            var t = w.props.touch;
            return Array.isArray(t) ? t : [t, 0]
        }

        function T() {
            return "hold" === k()[0]
        }

        function C() {
            var t;
            return !!(null == (t = w.props.render) ? void 0 : t.$$tippy)
        }

        function S() {
            return c || t
        }

        function j() {
            var t = S().parentNode;
            return t ? Ft(t) : document
        }

        function A() {
            return se(O)
        }

        function M(t) {
            return w.state.isMounted && !w.state.isVisible || Rt.isTouch || a && "focus" === a.type ? 0 : St(w.props.delay, t ? 0 : 1, te.delay)
        }

        function E() {
            O.style.pointerEvents = w.props.interactive && w.state.isVisible ? "" : "none", O.style.zIndex = "" + w.props.zIndex
        }

        function L(t, e, n) {
            var i;
            (void 0 === n && (n = !0), $.forEach((function (n) {
                n[t] && n[t].apply(void 0, e)
            })), n) && (i = w.props)[t].apply(i, e)
        }

        function P() {
            var e = w.props.aria;
            if (e.content) {
                var n = "aria-" + e.content, i = O.id;
                Et(w.props.triggerTarget || t).forEach((function (t) {
                    var e = t.getAttribute(n);
                    if (w.state.isVisible) t.setAttribute(n, e ? e + " " + i : i); else {
                        var o = e && e.replace(i, "").trim();
                        o ? t.setAttribute(n, o) : t.removeAttribute(n)
                    }
                }))
            }
        }

        function B() {
            !D && w.props.aria.expanded && Et(w.props.triggerTarget || t).forEach((function (t) {
                w.props.interactive ? t.setAttribute("aria-expanded", w.state.isVisible && t === S() ? "true" : "false") : t.removeAttribute("aria-expanded")
            }))
        }

        function I() {
            j().removeEventListener("mousemove", g), le = le.filter((function (t) {
                return t !== g
            }))
        }

        function H(t) {
            if (!(Rt.isTouch && (h || "mousedown" === t.type) || w.props.interactive && O.contains(t.target))) {
                if (S().contains(t.target)) {
                    if (Rt.isTouch) return;
                    if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0) return
                } else L("onClickOutside", [w, t]);
                !0 === w.props.hideOnClick && (w.clearDelayTimeouts(), w.hide(), p = !0, setTimeout((function () {
                    p = !1
                })), w.state.isMounted || V())
            }
        }

        function W() {
            h = !0
        }

        function N() {
            h = !1
        }

        function Y() {
            var t = j();
            t.addEventListener("mousedown", H, !0), t.addEventListener("touchend", H, Ct), t.addEventListener("touchstart", N, Ct), t.addEventListener("touchmove", W, Ct)
        }

        function V() {
            var t = j();
            t.removeEventListener("mousedown", H, !0), t.removeEventListener("touchend", H, Ct), t.removeEventListener("touchstart", N, Ct), t.removeEventListener("touchmove", W, Ct)
        }

        function z(t, e) {
            var n = A().box;

            function i(t) {
                t.target === n && (Ut(n, "remove", i), e())
            }

            if (0 === t) return e();
            Ut(n, "remove", s), Ut(n, "add", i), s = i
        }

        function F(e, n, i) {
            void 0 === i && (i = !1), Et(w.props.triggerTarget || t).forEach((function (t) {
                t.addEventListener(e, n, i), v.push({node: t, eventType: e, handler: n, options: i})
            }))
        }

        function U() {
            var t;
            T() && (F("touchstart", q, {passive: !0}), F("touchend", Z, {passive: !0})), (t = w.props.trigger, t.split(/\s+/).filter(Boolean)).forEach((function (t) {
                if ("manual" !== t) switch (F(t, q), t) {
                    case"mouseenter":
                        F("mouseleave", Z);
                        break;
                    case"focus":
                        F(Xt ? "focusout" : "blur", J);
                        break;
                    case"focusin":
                        F("focusout", J)
                }
            }))
        }

        function R() {
            v.forEach((function (t) {
                var e = t.node, n = t.eventType, i = t.handler, o = t.options;
                e.removeEventListener(n, i, o)
            })), v = []
        }

        function q(t) {
            var e, n = !1;
            if (w.state.isEnabled && !G(t) && !p) {
                var i = "focus" === (null == (e = a) ? void 0 : e.type);
                a = t, c = t.currentTarget, B(), !w.state.isVisible && Wt(t) && le.forEach((function (e) {
                    return e(t)
                })), "click" === t.type && (w.props.trigger.indexOf("mouseenter") < 0 || d) && !1 !== w.props.hideOnClick && w.state.isVisible ? n = !0 : et(t), "click" === t.type && (d = !n), n && !i && nt(t)
            }
        }

        function Q(t) {
            var e = t.target, n = S().contains(e) || O.contains(e);
            "mousemove" === t.type && n || function (t, e) {
                var n = e.clientX, i = e.clientY;
                return t.every((function (t) {
                    var e = t.popperRect, o = t.popperState, r = t.props.interactiveBorder, a = Pt(o.placement),
                        s = o.modifiersData.offset;
                    if (!s) return !0;
                    var u = "bottom" === a ? s.top.y : 0, c = "top" === a ? s.bottom.y : 0,
                        l = "right" === a ? s.left.x : 0, f = "left" === a ? s.right.x : 0, d = e.top - i + u > r,
                        p = i - e.bottom - c > r, h = e.left - n + l > r, m = n - e.right - f > r;
                    return d || p || h || m
                }))
            }(tt().concat(O).map((function (t) {
                var e, n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                return n ? {popperRect: t.getBoundingClientRect(), popperState: n, props: f} : null
            })).filter(Boolean), t) && (I(), nt(t))
        }

        function Z(t) {
            G(t) || w.props.trigger.indexOf("click") >= 0 && d || (w.props.interactive ? w.hideWithInteractivity(t) : nt(t))
        }

        function J(t) {
            w.props.trigger.indexOf("focusin") < 0 && t.target !== S() || w.props.interactive && t.relatedTarget && O.contains(t.relatedTarget) || nt(t)
        }

        function G(t) {
            return !!Rt.isTouch && T() !== t.type.indexOf("touch") >= 0
        }

        function X() {
            K();
            var e = w.props, n = e.popperOptions, i = e.placement, o = e.offset, r = e.getReferenceClientRect,
                a = e.moveTransition, s = C() ? se(O).arrow : null,
                c = r ? {getBoundingClientRect: r, contextElement: r.contextElement || S()} : t,
                l = [{name: "offset", options: {offset: o}}, {
                    name: "preventOverflow",
                    options: {padding: {top: 2, bottom: 2, left: 5, right: 5}}
                }, {name: "flip", options: {padding: 5}}, {
                    name: "computeStyles",
                    options: {adaptive: !a}
                }, {
                    name: "$$tippy", enabled: !0, phase: "beforeWrite", requires: ["computeStyles"], fn: function (t) {
                        var e = t.state;
                        if (C()) {
                            var n = A().box;
                            ["placement", "reference-hidden", "escaped"].forEach((function (t) {
                                "placement" === t ? n.setAttribute("data-placement", e.placement) : e.attributes.popper["data-popper-" + t] ? n.setAttribute("data-" + t, "") : n.removeAttribute("data-" + t)
                            })), e.attributes.popper = {}
                        }
                    }
                }];
            C() && s && l.push({
                name: "arrow",
                options: {element: s, padding: 3}
            }), l.push.apply(l, (null == n ? void 0 : n.modifiers) || []), w.popperInstance = Tt(c, O, Object.assign({}, n, {
                placement: i,
                onFirstUpdate: u,
                modifiers: l
            }))
        }

        function K() {
            w.popperInstance && (w.popperInstance.destroy(), w.popperInstance = null)
        }

        function tt() {
            return Bt(O.querySelectorAll("[data-tippy-root]"))
        }

        function et(t) {
            w.clearDelayTimeouts(), t && L("onTrigger", [w, t]), Y();
            var e = M(!0), n = k(), o = n[0], r = n[1];
            Rt.isTouch && "hold" === o && r && (e = r), e ? i = setTimeout((function () {
                w.show()
            }), e) : w.show()
        }

        function nt(t) {
            if (w.clearDelayTimeouts(), L("onUntrigger", [w, t]), w.state.isVisible) {
                if (!(w.props.trigger.indexOf("mouseenter") >= 0 && w.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(t.type) >= 0 && d)) {
                    var e = M(!1);
                    e ? o = setTimeout((function () {
                        w.state.isVisible && w.hide()
                    }), e) : r = requestAnimationFrame((function () {
                        w.hide()
                    }))
                }
            } else V()
        }
    }

    function pe(t, e) {
        void 0 === e && (e = {});
        var n = te.plugins.concat(e.plugins || []);
        document.addEventListener("touchstart", Qt, Ct), window.addEventListener("blur", Jt);
        var i = Object.assign({}, e, {plugins: n}), o = Yt(t).reduce((function (t, e) {
            var n = e && de(e, i);
            return n && t.push(n), t
        }), []);
        return Ht(t) ? o[0] : o
    }

    pe.defaultProps = te, pe.setDefaultProps = function (t) {
        Object.keys(t).forEach((function (e) {
            te[e] = t[e]
        }))
    }, pe.currentInput = Rt;
    Object.assign({}, dt, {
        effect: function (t) {
            var e = t.state, n = {
                popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
                arrow: {position: "absolute"},
                reference: {}
            };
            Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow)
        }
    });
    pe.setDefaultProps({render: ue});
    var he, me = pe, ve = window.jQuery, ge = {
        reorder_attribute_for_custom_time: function () {
            ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach((function (t) {
                for (var e = jQuery(".working-" + t), n = 1; n < e.length; n++) ve(".start-time", e[n]).attr("name", "daysOfWeekWorking[".concat(t, "][workHours][").concat(n, "][startTime]")), ve(".end-time", e[n]).attr("name", "daysOfWeekWorking[".concat(t, "][workHours][").concat(n, "][endTime]"))
            }))
        }, add_custom_time: function () {
            ve(".nta-btncustom-offline").on("click", ".add-custom-time", (function () {
                var t = ve(this).closest("tr"), e = ve("." + t.attr("class"));
                if (!(e.length >= 3)) {
                    var n = t.clone();
                    ve("#btn-apply-time", n).closest("td").remove(), ve("td", n).first().empty(), ve("td", n).last().remove(), n.append('<td><a style="color: #a00" href="javascript:;" class="remove-custom-time">Remove</a></td>'), ve(n).insertAfter(e.last()), ge.reorder_attribute_for_custom_time()
                }
            }))
        }, remove_custom_time: function () {
            ve(".nta-btncustom-offline").on("click", ".remove-custom-time", (function () {
                ve(this).closest("tr").remove(), ge.reorder_attribute_for_custom_time()
            }))
        }, copy_clipboard_shortcode: function () {
            ve("#nta-button-shortcode-copy").click((function () {
                ve(this).focus(), ve(this).select(), document.execCommand("copy"), ve(".nta-shortcode-copy-status").show()
            }))
        }, selectAll_table_input_shortcode: function () {
            ve(".nta-shortcode-table").click((function () {
                ve(this).focus(), ve(this).select()
            }))
        }, btn_apply_time_all: function () {
            ve("#btn-apply-time").on("click", (function () {
                for (var t = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], e = ve(".working-sunday"), n = function (n) {
                    var i = ve(".start-time", e[n]).val(), o = ve(".end-time", e[n]).val();
                    t.forEach((function (t) {
                        ve(".working-" + t).slice(n + 1).remove();
                        var e = ve(".working-" + t)[n];
                        if (void 0 === e) {
                            ve(".add-custom-time", ve(".working-" + t)[0]).trigger("click");
                            var r = ve(".working-" + t)[n];
                            ve(".start-time", r).val(i), ve(".end-time", r).val(o)
                        } else ve(".start-time", e).val(i), ve(".end-time", e).val(o)
                    }))
                }, i = 0; i < e.length; i++) n(i)
            }))
        }, btn_always_available: function () {
            ve("body.post-type-telegram-accounts input#rj-te-switch").click((function () {
                ve(this).prop("checked") ? ve(".nta-btncustom-offline").hide() : ve(".nta-btncustom-offline").show()
            }))
        }, select_display_pages_option: function () {
            ve("#displayCondition").change((function () {
                "includePages" == ve(this).val() ? (ve(".rj-te-pages-content.include-pages").removeClass("hide-select"), ve(".rj-te-pages-content.exclude-pages").addClass("hide-select")) : (ve(".rj-te-pages-content.exclude-pages").removeClass("hide-select"), ve(".rj-te-pages-content.include-pages").addClass("hide-select"))
            }))
        }, checkAll_SelectPages_List: function () {
            ve("#exclude-pages-checkall").change((function () {
                ve(".excludePages").prop("checked", ve(this).prop("checked"))
            })), ve("#include-pages-checkall").change((function () {
                ve(".includePages").prop("checked", ve(this).prop("checked"))
            }))
        }, registerTab: function () {
            ve("#tabs").tabs({
                active: 0, create: function (t, e) {
                    var n = ve("#tabs").tabs("option", "active");
                    e.tab.children().addClass("nav-tab-active"), 1 != n ? ve("#app-preview").hide() : ve("#app-preview").show()
                }, activate: function (t, e) {
                    1 != ve("#tabs").tabs("option", "active") ? ve("#app-preview").hide() : ve("#app-preview").show(), e.oldTab.children().removeClass("nav-tab-active"), e.newTab.children().addClass("nav-tab-active")
                }
            }), ve("#tabs-setting").tabs({active: 0})
        }, saveSetting: function () {
            ve(".wa-save").click((function (t) {
                t.preventDefault(), "undefined" != typeof tinyMCE && tinyMCE.triggerSave();
                var e = ve(".nta-tab-wrapper .nav-tab-active").data("action"), n = ve("form").serializeArray();
                n.push({name: "action", value: e}, {
                    name: "nonce",
                    value: rjte_wa.nonce
                }), n = ve.param(n), ve.ajax({
                    url: rjte_wa.url, type: "POST", data: n, beforeSend: function () {
                        a.saveLoading(!0)
                    }
                }).done((function (t) {
                    var e = ve("<p/>", {
                        html: ve("<strong/>", {html: "Settings saved."}).append(ve("<button/>", {
                            class: "notice-dismiss",
                            html: ve("<span/>", {class: "screen-reader-text", html: "Dismiss this notice."}),
                            click: function () {
                                ve(".rjte-wa-alert").hide("slow")
                            }
                        }))
                    }), n = ve("<div/>", {
                        class: "notice notice-success settings-error is-dismissible rjte-wa-alert",
                        html: ve("<div/>", {class: "wa__popup_notice"}).append(e)
                    });
                    ve(".nta-tab-wrapper").before(n), setTimeout((function () {
                        n.first().hide("slow")
                    }), 3e3), a.saveLoading(!1)
                }))
            }))
        }, registerTooltip: function () {
            me(".rjte-wa-tooltip", {
                content: "Add a scroll bar to your widget in case you have many agents",
                animation: "shift-away",
                maxWidth: 250
            })
        }
    }, be = function () {
        Object.values(ge).forEach((function (t) {
            return t()
        })), jQuery.validator.addMethod("domain", (function (t, e) {
            return this.optional(e) || /^https:\/\/chat.telegram.com/.test(t) || /^(\+)?\d+$/.test(t)
        }), "Please enter a valid phone number or group link"), jQuery.validator.setDefaults({
            errorClass: "wa-validate-error",
            success: "valid"
        }), ve(".post-type-telegram-accounts #post").validate({rules: {number: {required: !0, domain: !0}}})
    };
    (he = jQuery)(document).ready((function () {
        var t = jQuery("#app, #app-woo"), e = t.attr("id"), n = new x;
        if (be(), he.extend(rjte_wa, {
            selectedAccounts: {
                renderId: "#" + e,
                attrActive: "app" === e ? "widget_show" : "wc_show",
                attrPosition: "app" === e ? "widget_position" : "wc_position",
                init: function () {
                    new (function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (null !== t) return Backbone.View.extend({
                            el: t,
                            template: _.template(u("#selectedAccountTemplate").html()),
                            events: {
                                "click a.btn-remove-account": "setDeactive",
                                "click #input-users": "focusInputUser"
                            },
                            initialize: function () {
                                var t = this;
                                this.collection.fetch({
                                    reset: !0,
                                    data: {action: "rj_te_load_accounts_ajax", nonce: rjte_wa.nonce},
                                    type: "POST",
                                    beforeSend: function () {
                                        a.autocompleteLoading(!0)
                                    },
                                    success: function () {
                                        a.autocompleteLoading(!1), t.registerAutocomplete()
                                    },
                                    error: function () {
                                        console.log("error")
                                    }
                                }), this.accountsListView = new (f("#accountListTemplate"))({collection: this.collection}), this.listenTo(this.collection, "sync", this.renderAccountList), this.render()
                            },
                            registerAutocomplete: function () {
                                var t = this;
                                u("#input-users").autocomplete({
                                    minLength: 0,
                                    source: this.collection.deactive(),
                                    classes: {"ui-autocomplete": "nta-list-box-select"},
                                    select: function (e, n) {
                                        return t.collection.get(n.item.accountId).setActive({
                                            onDone: function () {
                                                u("#input-users").autocomplete("option", "source", t.collection.deactive())
                                            }
                                        }), !1
                                    }
                                }).autocomplete("instance")._renderItem = function (t, e) {
                                    var n = new (l("#accountItemView"))({model: e});
                                    return u("<li>").append(n.$el).appendTo(t)
                                }
                            },
                            setDeactive: function (t) {
                                var e = u(t.target).data("remove"), n = this.collection.get(e), i = this;
                                n.setDeactive({
                                    onDone: function () {
                                        u("#input-users").autocomplete("option", "source", i.collection.deactive())
                                    }
                                })
                            },
                            focusInputUser: function () {
                                u("#input-users").autocomplete("search", "")
                            },
                            renderAccountList: function () {
                                this.accountsListView.render()
                            },
                            render: function () {
                                return this.$el.html(this.template()), this.$el.append(this.accountsListView.$el), this
                            }
                        })
                    }(this.renderId))({collection: n})
                }
            }
        }), t.length && rjte_wa.selectedAccounts.init(), he("#app-design, #app-preview").length) {
            var i = new b;
            he("#app-design").length && new (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null !== t) return Backbone.View.extend({
                    el: t,
                    events: {
                        "keypress #title": "setAttributeByEvent",
                        "keyup #title": "setAttributeByEvent",
                        "keypress #btnLabel": "setAttributeByEvent",
                        "keyup #btnLabel": "setAttributeByEvent",
                        "change #rj-te-switch-gdpr": "setGDPR",
                        "change #isShowBtnLabel": "setAttributeByCheck",
                        "change #isShowScroll": "setAttributeByCheck",
                        "input .range input": "setRangeSlider",
                        "click .btn-left": "changeWidgetPosition",
                        "click .btn-right": "changeWidgetPosition"
                    },
                    initialize: function () {
                        var t = this, e = "{ margin: 0 !important; font-size: 16px !important}";
                        tinyMCE.get("description").on("keypress keyup", (function (e, n) {
                            t.setAttributeByEditor("description")
                        })), tinyMCE.get("gdprContent").on("keypress keyup", (function () {
                            t.setAttributeByEditor("gdprContent")
                        })), tinyMCE.get("responseText").on("keypress keyup", (function () {
                            t.setAttributeByEditor("responseText")
                        })), tinyMCE.get("description").dom.addStyle("p ".concat(e)), tinyMCE.get("gdprContent").dom.addStyle("p ".concat(e)), tinyMCE.get("responseText").dom.addStyle("p ".concat(e)), u(".textColor").wpColorPicker({
                            defaultColor: t.model.get("textColor"),
                            change: function (e, n) {
                                t.setAttribute("textColor", n.color.toString())
                            }
                        }), u(".backgroundColor").wpColorPicker({
                            defaultColor: t.model.get("backgroundColor"),
                            change: function (e, n) {
                                t.setAttribute("backgroundColor", n.color.toString())
                            }
                        }), u("body").on("click", ".wa__btn_popup", (function () {
                            t.changeWidgetLaunch()
                        })), this.model.view = this
                    },
                    changeWidgetLaunch: function () {
                        var t, e, n = this;
                        u(".wa__popup_chat_box").hasClass("wa__active") ? (u(".wa__popup_chat_box").removeClass("wa__active"), u(".wa__btn_popup").removeClass("wa__active"), clearTimeout(t), u(".wa__popup_chat_box").hasClass("wa__lauch") && new Promise((function (t, n) {
                            e = setTimeout((function () {
                                u(".wa__popup_chat_box").removeClass("wa__pending"), u(".wa__popup_chat_box").removeClass("wa__lauch"), t(e)
                            }), 400)
                        })).then((function () {
                            n.setAttribute("isLaunch", !1)
                        }))) : (u(".wa__popup_chat_box").addClass("wa__pending"), u(".wa__popup_chat_box").addClass("wa__active"), u(".wa__btn_popup").addClass("wa__active"), clearTimeout(e), u(".wa__popup_chat_box").hasClass("wa__lauch") || (u(".wa__popup_chat_box").addClass("wa__pending"), u(".wa__popup_chat_box").addClass("wa__active"), u(".wa__btn_popup").addClass("wa__active"), new Promise((function (e, n) {
                            t = setTimeout((function () {
                                u(".wa__popup_chat_box").addClass("wa__lauch"), e(t)
                            }), 300)
                        })).then((function () {
                            n.setAttribute("isLaunch", !0)
                        }))))
                    },
                    changeWidgetPosition: function (t) {
                        var e = t.target.value;
                        u(".setting.align button").removeClass("active"), u(t.target).addClass("active"), u("#btnPosition").val(e), this.setAttribute("btnPosition", e), "left" == e && (u("#left-range-slider").show(), u("#right-range-slider").hide()), "right" == e && (u("#left-range-slider").hide(), u("#right-range-slider").show())
                    },
                    setAttribute: function (t, e) {
                        this.model.set(s({}, t, e))
                    },
                    setGDPR: function (t) {
                        var e = t.target.checked;
                        e ? u("#nta-gdpr-editor").show() : u("#nta-gdpr-editor").hide(), this.setAttribute("isShowGDPR", e ? "ON" : "OFF")
                    },
                    setAttributeByCheck: function (t) {
                        var e = jQuery(t.target).attr("id"), n = t.target.checked;
                        "isShowBtnLabel" === e && ("ON" == (n = n ? "ON" : "OFF") ? jQuery("#btnLabelWidth, #btnLabel").closest("tr").show() : jQuery("#btnLabelWidth, #btnLabel").closest("tr").hide()), "isShowScroll" === e && (n ? jQuery("#scrollHeight").closest("tr").show() : jQuery("#scrollHeight").closest("tr").hide()), this.setAttribute(e, n)
                    },
                    setAttributeByEvent: function (t) {
                        var e = jQuery(t.target).attr("id"), n = jQuery(t.target).val();
                        this.setAttribute(e, n)
                    },
                    setAttributeByEditor: function (t) {
                        var e = tinyMCE.get(t).getContent();
                        this.setAttribute(t, e)
                    },
                    setRangeSlider: function (t) {
                        this.setAttribute(t.target.name, t.target.value)
                    }
                })
            }("#app-design"))({model: i}), he("#app-preview").length && new (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null !== t) return Backbone.View.extend({
                    el: t, template: _.template(u("#widget-preview").html()), initialize: function () {
                        this.listenTo(this.model, "change", this.render), this.listenTo(this.collection, "sync", this.render), this.render()
                    }, render: function () {
                        return this.$el.html(this.template({
                            settings: this.model.toJSON(),
                            accounts: this.collection.active()
                        })), this.wgIcon = this.$el.find(".wa__btn_popup_icon"), this.wgBtnIcon = this.$el.find(".wa__btn_popup"), this.wgLabel = this.$el.find(".wa__btn_popup_txt"), this.wgPopup = this.$el.find(".wa__popup_chat_box"), this.wgPopupHeading = this.$el.find(".wa__popup_heading"), this.wgPopupContent = this.$el.find(".wa__popup_content_list"), this.wgTitle = this.$el.find(".wa__popup_title"), this.wgIntro = this.$el.find(".wa__popup_intro"), this.wgTitle.css({color: this.model.get("textColor")}), this.wgIntro.css({
                            color: "#fff" == this.model.get("textColor") || "#ffffff" == this.model.get("textColor") ? "#D9EBC6" : this.model.get("textColor"),
                            opacity: "#fff" == this.model.get("textColor") || "#ffffff" == this.model.get("textColor") ? 1 : .8
                        }), this.wgIcon.css({background: this.model.get("backgroundColor")}), this.wgBtnIcon.css({
                            left: "left" === this.model.get("btnPosition") ? parseInt(this.model.get("btnLeftDistance")) : "unset",
                            right: "right" === this.model.get("btnPosition") ? parseInt(this.model.get("btnRightDistance")) : "unset",
                            bottom: parseInt(this.model.get("btnBottomDistance"))
                        }), this.wgLabel.css({
                            display: "ON" === this.model.get("isShowBtnLabel") ? "block" : "none",
                            left: "left" === this.model.get("btnPosition") ? "100%" : "unset",
                            right: "right" === this.model.get("btnPosition") ? "100%" : "unset",
                            marginRight: "right" === this.model.get("btnPosition") ? "7px" : "0px",
                            marginLeft: "left" === this.model.get("btnPosition") ? "7px" : "0px",
                            width: this.model.get("btnLabelWidth")
                        }), this.wgPopup.css({
                            left: "left" === this.model.get("btnPosition") ? parseInt(this.model.get("btnLeftDistance")) : "unset",
                            right: "right" === this.model.get("btnPosition") ? parseInt(this.model.get("btnRightDistance")) : "unset",
                            bottom: parseInt(this.model.get("btnBottomDistance")) + 72
                        }), this.wgPopupHeading.css({background: this.model.get("backgroundColor")}), "ON" !== this.model.get("isShowScroll") && 1 != this.model.get("isShowScroll") || this.wgPopupContent.css({
                            maxHeight: parseInt(this.model.get("scrollHeight")),
                            overflow: "auto"
                        }), "left" == this.model.get("btnPosition") ? (u("#left-range-slider").show(), u("#right-range-slider").hide()) : (u("#left-range-slider").hide(), u("#right-range-slider").show()), "OFF" == this.model.get("isShowGDPR") ? u(".rj-te-gdpr").hide() : u(".rj-te-gdpr").show(), this
                    }
                })
            }("#app-preview"))({model: i, collection: n})
        }
        if (he("#wa-button, #button-design").length) {
            var o = new y;
            he("#wa-button").length && new (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null !== t) return Backbone.View.extend({
                    el: t,
                    template: _.template(u("#button-preview").html()),
                    initialize: function () {
                        this.render(), this.listenTo(this.model, "change", this.render)
                    },
                    render: function () {
                        var t = "";
                        return t += "round" === this.model.get("type") ? "wa__r_button " : "wa__sq_button ", t += _.isEmpty(this.model.get("avatar")) ? "wa__btn_w_icon " : "wa__btn_w_img ", t += _.isEmpty(this.model.get("title")) ? "wa__button_text_only" : "", this.model.attributes.buttonClass = t, this.$el.html(this.template({buttonStyles: this.model.toJSON()})), this.btn = this.$el.find(".wa__button").css({background: this.model.get("backgroundColor")}), this.$el.find(".wa__btn_txt .wa__cs_name").css({
                            color: "#fff" == this.model.get("textColor") || "#ffffff" == this.model.get("textColor") ? "#d5f0d9" : this.model.get("textColor"),
                            opacity: "#fff" == this.model.get("textColor") || "#ffffff" == this.model.get("textColor") ? 1 : "0.8"
                        }), this.$el.find(".wa__btn_txt .wa__btn_title").css({color: this.model.get("textColor")}), this
                    }
                })
            }("#wa-button"))({model: o}), he("#button-design").length && new (function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (null !== t) return Backbone.View.extend({
                    el: t,
                    events: {
                        "change #textColor": "setAttributeByEvent",
                        "change #backgroundColor": "setAttributeByEvent",
                        "change #label": "setAttributeByEvent",
                        "click .btn-round": "changeButtonType",
                        "click .btn-square": "changeButtonType"
                    },
                    initialize: function () {
                        var t = this;
                        this.model.view = this, u("#textColor").wpColorPicker({
                            defaultColor: t.model.get("textColor"),
                            change: function (e, n) {
                                t.setAttribute("textColor", n.color.toString())
                            }
                        }), u("#backgroundColor").wpColorPicker({
                            defaultColor: t.model.get("backgroundColor"),
                            change: function (e, n) {
                                t.setAttribute("backgroundColor", n.color.toString())
                            }
                        })
                    },
                    setAttribute: function (t, e) {
                        this.model.set(s({}, t, e))
                    },
                    setAttributeByEvent: function (t) {
                        var e = jQuery(t.target).attr("id"), n = jQuery(t.target).val();
                        this.setAttribute(e, n)
                    },
                    changeButtonType: function (t) {
                        var e = this, n = t.target.value;
                        u(".setting.align button").removeClass("active"), u(t.target).addClass("active"), u("#btnType").val(n);
                        var i = "round" == n ? "wa__sq_button" : "wa__r_button",
                            o = "round" == n ? "wa__r_button" : "wa__sq_button";
                        u("#rjte-wabutton > a").removeClass(i).addClass(o), setTimeout((function () {
                            e.setAttribute("type", n)
                        }), 300)
                    },
                    render: function () {
                        var t = "";
                        return t += "round" === this.model.get("type") ? "wa__r_button " : "wa__sq_button ", t += _.isEmpty(this.model.get("avatar")) ? "wa__btn_w_icon " : "wa__btn_w_img ", t += _.isEmpty(this.model.get("title")) ? "wa__button_text_only" : "", this.model.attributes.buttonClass = t, this.$el.html(this.template({buttonStyles: this.model.toJSON()})), this
                    }
                })
            }("#button-design"))({model: o})
        }
    }))
}]);
