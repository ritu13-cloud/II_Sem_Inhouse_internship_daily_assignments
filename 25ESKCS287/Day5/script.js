$(document).ready(function () {

    $(".details-btn").click(function () {

        $(this).next(".details").slideToggle(400);

        if ($(this).text() == "View Details") {
            $(this).text("Hide Details");
            $(this).css({
                "background": "#d9534f",
                "color": "white"
            });
        } else {
            $(this).text("View Details");
            $(this).css({
                "background": "#5c5470",
                "color": "white"
            });
        }

    });


    $("#search").keyup(function () {

        let value = $(this).val().toLowerCase();
        let visibleStudents = 0;

        $(".student-card").each(function () {

            let name = $(this).data("name").toString().toLowerCase();
            let branch = $(this).data("branch").toString().toLowerCase();
            let cgpa = $(this).data("cgpa").toString().toLowerCase();

            if (
                name.includes(value) ||
                branch.includes(value) ||
                cgpa.includes(value)
            ) {
                $(this).show();
                visibleStudents++;
            } else {
                $(this).hide();
            }

        });

        $("#count").text(visibleStudents);

    });


    $("#sortBtn").click(function () {

        let students = $(".student-card").get();

        students.sort(function (a, b) {

            let cgpaA = parseFloat($(a).data("cgpa"));
            let cgpaB = parseFloat($(b).data("cgpa"));

            return cgpaB - cgpaA;

        });

        $.each(students, function (index, student) {
            $("#studentContainer").append(student);
        });

    });

});