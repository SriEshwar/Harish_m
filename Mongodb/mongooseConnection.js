var mongoose = require('mongoose');

var Schema = mongoose.Schema;

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

var jobseeker1 = new JobSeeker({
    jobseekerName: "Hari",
    age: 22,
    emailId: "hari@test.com",
    certified: true,
    skills: [
        { skillName: "java", experience: 1, proficiency: "beginner" },
        { skillName: "angular", experience: 2, proficiency: "intermediate" }
    ]
});

jobseeker1.save();
