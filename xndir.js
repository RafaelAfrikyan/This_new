let exam = '';


function myIssue (str) {

    console.log(exam + str)
    exam +=str;
    return myIssue;
}
myIssue('hello')("asa")('vds')