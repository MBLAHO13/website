// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets

$('#courseInfoModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = link.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$(function()
{
  $(document).on('click', '.btn-add#add-term', function(e)
  {
    e.preventDefault();
    var termRow = $('.terms'),
        rowCounter = termRow.children().length;

    var lastEle = $(termRow.children()[rowCounter-1]);
    var lastNum = parseInt(lastEle.attr("id").replace("clone",""));

    var currentEntry = $('#clone' + lastNum),
        newEntry = $(currentEntry.clone());

    lastNum++;
    newEntry.attr("id", "clone" + lastNum);

    newEntry.appendTo(termRow);

    newEntry.find('input').val('');
    termRow.find('.row:not(:last) .btn-add')
        .removeClass('btn-add').addClass('btn-remove')
        .removeClass('btn-success').addClass('btn-danger')
        .html('<span>Delete This Term</span>');
  }).on('click', '.btn-remove', function(e) {
    if($('.cons').children().length == 2)
    {
      $(this).parents('.row:first').remove();
      $(this).parents('.row:first').attr("id", "clone0");
    }
    $(this).parents('.row:first').remove();

    e.preventDefault();
    return false;
  })
});
