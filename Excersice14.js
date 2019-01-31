var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

var myObj1 =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

function filter_occupation(myObj) {
    return myObj.occupation == "Programmer";
}

var filtered = myObj.filter(filter_occupation);

console.log(filtered)

function compare(a,b) {
    if (a.age < b.age)
      return -1;
    if (a.age > b.age)
      return 1;
    return 0;
  }
console.log("\n")
console.log(myObj.sort(compare))
console.log("\n")


var Team_Leader = myObj.filter(obj => {
    return obj.occupation === "Team Leader"
  })
for (var i = 0, len = Team_Leader.length; i < len; i++) {
    delete(Team_Leader[i].occupation);
}

var Programmer = myObj.filter(obj => {
    return obj.occupation === "Programmer"
    })
    for (var i = 0, len = Programmer.length; i < len; i++) {
    delete(Programmer[i].occupation);
}

var res = {};
 res["programmer"]=Programmer;
 res["Team Leader"]=Team_Leader;
console.log(res);


function getName(item,index){
    var names=item.name;
    return names;
}

console.log(myObj1.map(getName));