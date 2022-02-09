$(document).ready(function() {

    generateQuizQues();


    let AnsArr = {
        question1: 'b1_text',
        question2: 'd2_text',
        question3: 'd3_text',
        question4: 'd4_text',
        question5: 'a5_text',
        question6: 'b6_text',
        question7: 'c7_text',
        question8: 'd8_text',
        question9: 'a9_text',
        question10: 'd10_text'
    }

    let userAnsArr = {
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: ''
    }

    let userScore = 0

    $('.option').on("click", function() {
        var id = $(this).attr('id');
        var value = $(this).text();
        var questionid = $(this).parent('div').attr('id')

        userAnsArr[questionid] = id;

        $('#' + questionid).find('.option').removeClass("selectans");
        $(this).addClass("selectans");


    });

    $(".subbtn").on("click", function() {

        var validOrNot = true
        $.each(userAnsArr, function(key, value) {
            if (value == "") {
                validOrNot = false
                alert("plese answer all the question")
                return false
            }
        })

        if (!validOrNot) {
            return false
        }

        $.each(userAnsArr, function(key, value) {
            $('#' + value).removeClass('selectans')
            if (AnsArr[key] == value) { // crct ans
                $('#' + value).addClass('rightans')
                userScore++
            } else { // wrng ans
                $('#' + AnsArr[key]).addClass('rightans')
                $('#' + value).addClass('wrongans')
            }
        })
        alert("your score is : " + userScore + " out of 10")
    })

    $(".clrbtn").on("click", function() {
        userAnsArr = {
            question1: '',
            question2: '',
            question3: '',
            question4: '',
            question5: '',
            question6: '',
            question7: '',
            question8: '',
            question9: '',
            question10: ''
        }
        userScore = 0;
        $('.option').removeClass('selectans')
        $('.option').removeClass('rightans')
        $('.option').removeClass('worngans')
    });
});


function generateQuizQues() {
    let quizData = [{
            question: "How old are you ?",
            id: "question1",
            option: {
                opt1: {
                    id: "a1_text",
                    value: "23"
                },
                opt2: {
                    id: "b1_text",
                    value: "22"
                },
                opt3: {
                    id: "c1_text",
                    value: "27"
                },
                opt4: {
                    id: "d1_text",
                    value: "25"
                },
            }
        }, {
            question: "jquery is?",
            id: "question2",
            option: {
                opt1: {
                    id: "a2_text",
                    value: "style sheet"
                },
                opt2: {
                    id: "b2_text",
                    value: "programming language"
                },
                opt3: {
                    id: "c2_text",
                    value: "scripting language"
                },
                opt4: {
                    id: "d2_text",
                    value: "library function"
                },
            }
        }, {
            question: "what are the languages you know ?",
            id: "question3",
            option: {
                opt1: {
                    id: "a3_text",
                    value: "HTML"
                },
                opt2: {
                    id: "b3_text",
                    value: "css"
                },
                opt3: {
                    id: "c3_text",
                    value: "javascript"
                },
                opt4: {
                    id: "d3_text",
                    value: "all of the above"
                },
            }
        },
        {
            question: "Which one is best programming language ?",
            id: "question4",
            option: {
                opt1: {
                    id: "a4_text",
                    value: "java"
                },
                opt2: {
                    id: "b4_text",
                    value: "c"
                },
                opt3: {
                    id: "c4_text",
                    value: "javasript"
                },
                opt4: {
                    id: "d4_text",
                    value: "all of the above"
                },
            }
        }, {
            question: "P tag means ? ",
            id: "question5",
            option: {
                opt1: {
                    id: "a5_text",
                    value: "paragraph tag"
                },
                opt2: {
                    id: "b5_text",
                    value: "programming tag"
                },
                opt3: {
                    id: "c5_text",
                    value: "post tag"
                },
                opt4: {
                    id: "d5_text",
                    value: "none of the above"
                },
            }
        }, {
            question: "CSS is ? ",
            id: "question6",
            option: {
                opt1: {
                    id: "a6_text",
                    value: "scripting language"
                },
                opt2: {
                    id: "b6_text",
                    value: "cascading style sheet"
                },
                opt3: {
                    id: "c6_text",
                    value: "cal sheet"
                },
                opt4: {
                    id: "d6_text",
                    value: "none of the above"
                },
            }
        }, {
            question: "js is ? ",
            id: "question7",
            option: {
                opt1: {
                    id: "a7_text",
                    value: "frame work"
                },
                opt2: {
                    id: "b7_text",
                    value: "cascading style sheet"
                },
                opt3: {
                    id: "c7_text",
                    value: "scripting language"
                },
                opt4: {
                    id: "d7_text",
                    value: "none of the above"
                },
            }
        }, {
            question: "which one is frame work? ",
            id: "question8",
            option: {
                opt1: {
                    id: "a8_text",
                    value: "HTML"
                },
                opt2: {
                    id: "b8_text",
                    value: "css"
                },
                opt3: {
                    id: "c8_text",
                    value: "javascript"
                },
                opt4: {
                    id: "d8_text",
                    value: "none of the above"
                },
            }
        }, {
            question: "js means? ",
            id: "question9",
            option: {
                opt1: {
                    id: "a9_text",
                    value: "javascript"
                },
                opt2: {
                    id: "b9_text",
                    value: "junior script"
                },
                opt3: {
                    id: "c9_text",
                    value: "j script"
                },
                opt4: {
                    id: "d9_text",
                    value: "none of the above"
                },
            }
        },
        {
            question: "which one is anchor tag ",
            id: "question10",
            option: {
                opt1: {
                    id: "a10_text",
                    value: "button"
                },
                opt2: {
                    id: "b10_text",
                    value: "p"
                },
                opt3: {
                    id: "c10_text",
                    value: "h3"
                },
                opt4: {
                    id: "d10_text",
                    value: "a"
                },
            }
        },
    ];

    let quizContent = "";

    $.each(quizData, function(key, value) {

        quizContent += '<div class="question-container">' +
            '<h3 class="question">' + value.question + '</h3>' +
            ' <div class="optns" id="' + value.id + '">' +
            '<div class="option" id="' + value.option.opt1.id + '">' + value.option.opt1.value + '</div>' +
            '<div class="option" id="' + value.option.opt2.id + '">' + value.option.opt2.value + '</div>' +
            '<div class="option" id="' + value.option.opt3.id + '">' + value.option.opt3.value + '</div>' +
            '<div class="option" id="' + value.option.opt4.id + '">' + value.option.opt4.value + '</div>' +
            ' </div>' +
            '</div>';
    })

    $(".body-container").append(quizContent);
}