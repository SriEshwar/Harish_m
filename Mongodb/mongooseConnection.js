var mongoose = require('mongoose');

var Schema = mongoose.Schema;

async function mongooseConnect(){

var skillSchema = new Schema({
    skillName: String,
    experience: Number,
    proficiency: String
});

var jobSeekerSchema = new Schema({
    jobseekerName: String,
    emailId: String,
    age: Number,
    certified: Boolean,
    skills: [skillSchema]
});


var JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);

mongoose.connect("mongodb://127.0.0.1:27017/aspire");

// var jobseeker1 = new JobSeeker({
//     jobseekerName: "Hari",
//     age: 22,
//     emailId: "hari@test.com",
//     certified: true,
//     skills: [
//         { skillName: "java", experience: 1, proficiency: "beginner" },
//         { skillName: "angular", experience: 2, proficiency: "intermediate" }
//     ]
// });

// jobseeker1.save();

const updateName = await JobSeeker.findOneAndUpdate({"jobseekerName": "Hari"},{ $set:{ "age": 25 }});


const result = await JobSeeker.find({"skills.experience":{$lte:2}})
result.map(record => console.log(record))
}

mongooseConnect();