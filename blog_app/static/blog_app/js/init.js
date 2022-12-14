(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
      fullWidth: true,
      indicators: false,
    });
    $(".dropdown-trigger").dropdown({
        hover: false,
        coverTrigger: false,
        alignment: 'center',
        constrainWidth: true
    });
    $('.datepicker').datepicker({
      firstDay: 1,
      selectYears: 90,
      format: 'yyyy-mm-dd',
      yearRange: [1910, 2023]
  });
  $('.slider').slider({
    indicators: false,
    height: 500
  });
  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
  $('.tooltipped').tooltip();
  $(document).ready(function(){
    $('.carousel').carousel();
  });
  $('.fixed-action-btn').floatingActionButton();
  // $('#descripcion').val('');
  // M.textareaAutoResize($('#descripcion'));
  $('input#input_text, textarea#descripcion').characterCounter();
  $('.collapsible').collapsible();
  }); // end of document ready
})(jQuery); // end of jQuery name space

