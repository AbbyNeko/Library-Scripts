function getGrade(score) {
    let grade;
    // returns the grade depending on score
    switch(true) {
        case (score > 25):
            grade = 'A';
            break;
        case (score > 20):
            grade = 'B';
            break;
        case (score > 15):
            grade = 'C';
            break;
        case (score > 10):
            grade = 'D';
            break;
        case (score > 5):
            grade = 'E';
            break;
        case (score <= 5):
            grade = 'F';
    }
    return grade;
}

module.exports = getGrade;