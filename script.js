function labelcreate(tag,atn,atv,cont){
    var ele=document.createElement(tag);
    ele.setAttribute(atn,atv);
    ele.innerHTML=cont;
    return ele;
}
function linebreakers(tag)
{
    var ele=document.createElement(tag);
    return ele;  
}
function inputele(tag,atn,atv,atn1,atv1)
{
    var ele=document.createElement(tag);
    ele.setAttribute(atn,atv);
    ele.setAttribute(atn1,atv1);
    return ele;
}

var tag1=labelcreate("label","for","firstname","Firstname");
var br1=linebreakers("br");
var inp1=inputele("input","type","text","id","firstname");
var br2=linebreakers("br");
document.body.append(tag1,br1,inp1,br2);

var tag1=labelcreate("label","for","middlename","Middlename");
var br1=linebreakers("br");
var inp1=inputele("input","type","text","id","middlename");
var br2=linebreakers("br");
document.body.append(tag1,br1,inp1,br2);

var tag1=labelcreate("label","for","lastname","Lastname");
var br1=linebreakers("br");
var inp1=inputele("input","type","text","id","lastname");
var br2=linebreakers("br");
document.body.append(tag1,br1,inp1,br2);

var tag1=labelcreate("label","for","email","Email");
var br1=linebreakers("br");
var inp1=inputele("input","type","email","id","email");
var br2=linebreakers("br");
document.body.append(tag1,br1,inp1,br2);

var tag1=labelcreate("label","for","password","Password");
var br1=linebreakers("br");
var inp1=inputele("input","type","password","id","password");
var br2=linebreakers("br");
document.body.append(tag1,br1,inp1,br2);



