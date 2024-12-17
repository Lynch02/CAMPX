(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", "");
    });
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

function sendWhatsApp() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const items = document.getElementById('items').value;

  const message = `*Hallo kak saya mau pesan*\n` +
                  `Nama: ${name}\n` +
                  `Email: ${email}\n` +
                  `Telepon: ${phone}\n` +
                  `Tanggal/Jam: ${date}\n` +
                  `List of Items: ${items}\n\n`+
                  `*Lokasi Toko*\n` +
                  `https://maps.app.goo.gl/3ttJeC8zQ2FZGsow8\n`;
                  
  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "6281563245618";

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Ambil semua elemen dengan class .quantity-control
document.querySelectorAll(".quantity-control").forEach((control) => {
  // Tombol kurang, tambah, dan input jumlah
  const decreaseBtn = control.querySelector(".btn-decrease");
  const increaseBtn = control.querySelector(".btn-increase");
  const quantityInput = control.querySelector(".quantity-input");

  // Event untuk tombol kurang
  decreaseBtn.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value); // Ambil nilai sekarang
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1; // Kurangi nilai
    }
  });

  // Event untuk tombol tambah
  increaseBtn.addEventListener("click", () => {
    let currentValue = parseInt(quantityInput.value); // Ambil nilai sekarang
    quantityInput.value = currentValue + 1; // Tambah nilai
  });
});
