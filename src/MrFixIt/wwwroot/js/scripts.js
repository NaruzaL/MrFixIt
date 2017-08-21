$(document).ready(function () {
    $('.claimJobButton').click(function(){
        var jobId = $('.claimJobButton').val();
        console.log(typeof (jobId));
        console.log(jobId);
        var claimedJobId = parseInt(jobId);
        console.log(claimedJobId)
    event.preventDefault();
        $.ajax({
            type: 'GET',
            data: {id: claimedJobId},
            dataType: 'html',
            url: '@Url.Action("Claim")',
            success: function (result) {
                $('#ShowClaimForm').html(result);
            }
        });
    });
});