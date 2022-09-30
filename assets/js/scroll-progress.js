    // change progress bar width with scrolling
    $(document).ready(function() {
        function getScrollPercent() {
            var h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            return parseInt((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100) + "%";
        }
      
        $(window).scroll(function() {

            var p = getScrollPercent();
            $('.scroll-progress').css("width", p);
          });
          });