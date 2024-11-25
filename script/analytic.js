(function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
  );
  ga("create", "UA-23874478-1", "auto");
  ga("send", "pageview");
//

jQuery(document).ready(function ($) {
    var p = parent.window.document;
    fhScript = p.createElement("script");
    fhScript.src =
      "https://fareharbor.com/embeds/api/v1/?autolightframe=yes";
    $("body").append(fhScript);
    $("body").append(
      '<a href="https://fareharbor.com/embeds/book/tourpatron/?full-items=yes" style="top:120px !important;border:solid white 1px !important;" class="fh-button-gold fh-hide--mobile fh-size--small fh-fixed--top fh-shape--round fh-icon--calendar-check">Book a Tour</a>'
    );
    $("body").append(
      '<a href="https://fareharbor.com/embeds/book/tourpatron/?full-items=yes" style="border:solid white 1px !important;right:-1px !important;" class="fh-button-flat-gold fh-hide--desktop fh-size--small fh-fixed--side fh-icon--calendar-check">Book a Tour</a>'
    );
  });