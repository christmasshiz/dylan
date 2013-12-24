var Modals = {
 
  init: function() {
    $("<div />", {
      "class": "modal",
      "html" : 
        "<h3>Merry Christmas, Dylan!</h3>" +
        "<button id='trigger2' class='modal-close'>Close</button>"
    }).appendTo("body");
    
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $(".modal-button, .modal-close").on("click", function() {
      Modals.toggleModal(this);
    });   
  },
  
  toggleModal: function(button) {
   
    var modal = $(".modal");
                      
    if (modal.hasClass("show")) {
      modal
        .removeClass("show")
      
     setTimeout(function() {
        modal
          .removeClass()
          .addClass("modal");
      }, 100);
      
    } else {
      modal
        .removeClass()
        .addClass("modal " + $(button).data("modal-type"));
      
      setTimeout(function() {
        modal.addClass("show");
      }, 100);
      
    }
    
  }
  
}

Modals.init();