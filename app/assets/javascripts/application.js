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

// Dynamic term input rows
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

$(function()
{
  let course = $(this).val();
  $(document).on('click', '.course-more-info', function(e)
  {
    e.preventDefault();
    let coursename = this.text;
    coursename = coursename.replace(" ", "/");
    requestUrl = "http://advisor-ai.tech:8000/api/courses/" + coursename;

    $.ajax({
      url: requestUrl,
      type: 'GET',

      success: function(response) {
        let studentLevel = ["Freshman", "Sophomore", "Pre-Junior", "Junior", "Senior"];
        let minLevel = studentLevel[response[0].min_class];
        let maxLevel = studentLevel[response[0].max_class];
        let restrictions = "Available to " + minLevel + " level through " + maxLevel + " level students.";
        $('#modal-course').html(response[0].dept + " " + response[0].code);
        $('#modal-title').html(response[0].title);
        $('#modal-description').html(response[0].description);
        $('#modal-restrictions').html(restrictions);
        // $('#modal-course').html(`${response.current_observation.feelslike_c}`);
        // $('#modal-title').html(`${response.current_observation.feelslike_f}`);
        // $('#modal-description').html(`${response.current_observation.dewpoint_c}`);
        // $('#modal-prereq-of').html(`${response.current_observation.dewpoint_f}`);
        // $('#modal-prereq-for').html(`${response.current_observation.UV}`);
      },
      error: function() {

      }
    });
  })
});

// $( function() {
//   e.preventDefault();
//   requestUrl = "http://advisor-ai.tech:8000/api/courses/all";
//
//   $.ajax({
//     url: requestUrl,
//     type: 'GET',
//
//     success: function(response) {
//       console.log(response);
//       $('#modal-course').html(coursename);
//       // $('#modal-title').html(coursename);
//       // $('#modal-description').html(coursename);
//       // $('#modal-prereq-of').html(coursename);
//       // $('#modal-prereq-for').html(coursename);
//       // $('#modal-course').html(`${response.current_observation.feelslike_c}`);
//       // $('#modal-title').html(`${response.current_observation.feelslike_f}`);
//       // $('#modal-description').html(`${response.current_observation.dewpoint_c}`);
//       // $('#modal-prereq-of').html(`${response.current_observation.dewpoint_f}`);
//       // $('#modal-prereq-for').html(`${response.current_observation.UV}`);
//     },
//     error: function() {
//
//     }
//   });
//     var availableTags = [
//       "ActionScript",
//       "AppleScript",
//       "Asp",
//       "BASIC",
//       "C",
//       "C++",
//       "Clojure",
//       "COBOL",
//       "ColdFusion",
//       "Erlang",
//       "Fortran",
//       "Groovy",
//       "Haskell",
//       "Java",
//       "JavaScript",
//       "Lisp",
//       "Perl",
//       "PHP",
//       "Python",
//       "Ruby",
//       "Scala",
//       "Scheme"
//     ];
//     $( "#course-input-field" ).autocomplete({
//       source: availableTags
//     });
//   } );
