(function() {
    var header = new Headroom(document.querySelector("#header-nav"), {
        tolerance: 5,
        offset : 100,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init();
}());