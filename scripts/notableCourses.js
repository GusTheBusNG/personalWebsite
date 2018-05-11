var notableCoursesTable = document.getElementById("notableCoursesTable");

function sendNotableCourses(courses) {
    var i = 0;
    for ( ; i + 1 < courses.length; i += 2) {
        fillCourseTitle(courses, i);
        fillCourseDescription(courses, i);
    }
    if (courses.length % 2 !== 0) {
        notableCoursesTable.innerHTML +=
        "<tr><th class=\"classTitle\">" + courses[i].title + "</th>/tr><tr><th class=\"classDescription\">" + courses[i].description + "</th></tr>";
    }
}

function fillCourseTitle(courses, i) {
    notableCoursesTable.innerHTML +=
    "<tr><th class=\"classTitle\">" + courses[i].title + "</th><th class=\"classTitle\">" + courses[++i].title + "</th></tr>";
}

function fillCourseDescription(courses, i) {
    notableCoursesTable.innerHTML +=
    "<tr><th class=\"classDescription\">" + courses[i].description + "</th><th class=\"classDescription\">" + courses[++i].description + "</th></tr>"
}
