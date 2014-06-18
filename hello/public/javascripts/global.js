$(document).ready(function() {
    getPolls();
});

function getPolls() {

    $.getJSON( '/poll/53a13140ecffedecb5f18ca0', function( data ) {
        var pollResults = $('#voting-form');
        poll = data[0];
        pollResults.append("<p>" + poll.question + "</p>");
        var voteForm = $('<form action="/poll/vote"><input type="hidden" value=' + poll._id+  '></form>')
        $.each(poll.choices, function(i, choice){
           voteForm.append('<input type="radio" name="name" value="'+ choice.name + '">' + choice.name + ' ' + choice.votes + '<br>');
        });
		var voteButton = $('<input type="button" id="vote-button" value="Vote!">')
		voteButton.click(function(event){
			vote(poll._id, $('input[name=name]:checked').val());
		});
        voteForm.append(voteButton);
        pollResults.append(voteForm);
    });
};

function vote(id, choice) {
    $.ajax({
        type: 'POST',
        data: {'id':id, 'name':choice},
        url: '/poll/vote',
        dataType: 'JSON'
     }).done(function(response) {
        var pollResults = $('#voting-form');
        pollResults.empty();
		getPolls();
	 });
}
