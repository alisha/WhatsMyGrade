function findLetterGrade(gradeStatement, grade) {
	if (grade >= 0.925) {
		gradeStatement += "n: A";
	} else if (grade >= 0.895) {
		gradeStatement += "n: A-";
	} else if (grade >= 0.865) {
		gradeStatement += ": B+";
	} else if (grade >= 0.825) {
		gradeStatement += ": B";
	} else if (grade >= 0.795) {
		gradeStatement += ": B-";
	} else if (grade >= 0.765) {
		gradeStatement += ": C+";
	} else if (grade >= 0.725) {
		gradeStatement += ": C";
	} else if (grade >= 0.695) {
		gradeStatement += ": C-";
	} else if (grade >= 0.665) {
		gradeStatement += ": D+";
	} else if (grade >= 0.625) {
		gradeStatement += ": D";
	} else if (grade >= 0.595) {
		gradeStatement += ": D-";
	} else {
		gradeStatement += "n: F";
	}
	gradeStatement += "</h1>";
	return gradeStatement;
}

$(document).ready(function() {
	$('button').click(function(event) {
		var numerator = $('#numerator').val();
		var denominator = $('#denominator').val();
		var grade = numerator/denominator;
		var gradeStatement = "<h1>You got a";
		gradeStatement = findLetterGrade(gradeStatement, grade);
		$('div.results').first().html(gradeStatement);
		event.preventDefault();
	});
});