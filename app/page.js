"use client";

// Simple UI components (no external UI library needed)
const Card = ({children,className=""}) => (
  <div className={`rounded-xl border bg-white shadow ${className}`}>{children}</div>
);

const CardContent = ({children,className=""}) => (
  <div className={className}>{children}</div>
);
const Button = ({children,onClick,className="",variant}) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-lg cursor-pointer ${className}`}>
    {children}
  </button>
);
const Input = (props) => (
  <input {...props} className={`w-full border rounded-lg px-3 py-2 ${props.className||""}`} />
);
const Textarea = (props) => (
  <textarea {...props} className={`w-full border rounded-lg px-3 py-2 ${props.className||""}`} />
);
import { motion } from "framer-motion";
import { useState } from "react";

export default function MerecruitersWebsite() {

  const [lang,setLang] = useState("en");

  const t = {
    en:{
      hero:"Start Your Career In The UAE",
      apply:"Apply For Jobs",
      hire:"Hire Workers",
      aboutTitle:"About Merecruiters",
      jobs:"Current UAE Job Openings",
      applyForm:"Apply For UAE Jobs",
      requestWorkers:"Request Workers"
    },

    hi:{
      hero:"यूएई में नौकरी शुरू करें",
      apply:"नौकरी के लिए आवेदन करें",
      hire:"वर्कर हायर करें",
      aboutTitle:"हमारे बारे में",
      jobs:"यूएई में वर्तमान नौकरियां",
      applyForm:"यूएई नौकरी आवेदन",
      requestWorkers:"वर्कर रिक्वेस्ट"
    }
  }

  const text = t[lang] || t.en;

  const [candidate,setCandidate] = useState({
    name:"",
    phone:"",
    country:"",
    skill:"",
    passport:"",
    experience:"",
    cv:null
  });

  const [employer,setEmployer] = useState({
    company:"",
    person:"",
    email:"",
    phone:"",
    workers:""
  });

  const submitCandidate = async () => {

    if(!candidate.name || !candidate.phone){
      alert("Please enter your name and phone number");
      return;
    }

    const formData = new FormData();

    Object.keys(candidate).forEach(k=>{
      if(candidate[k]) formData.append(k,candidate[k]);
    });

    try{
      await fetch('/api/apply',{ method:'POST', body:formData });
    }catch(e){
      console.log(e);
    }

    alert("Application received. Our recruitment team will contact you soon.");

    window.open(
      `https://wa.me/971521120315?text=Hello%20Merecruiters,%20I%20applied%20for%20a%20job.%20My%20name%20is%20${candidate.name}`,
      '_blank'
    );
  };


  const submitEmployer = async () => {

    try{
      await fetch('/api/employer-request',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(employer)
      });
    }catch(e){
      console.log(e);
    }

    alert("Employer request submitted.");
  };


  const jobs = [
    {title:"Drivers", openings:10, salary:"AED 4000", location:"Dubai / Abu Dhabi"},
    {title:"Electricians", openings:30, salary:"AED 4000", location:"Dubai / Abu Dhabi"},
    {title:"Plumbers", openings:25, salary:"AED 4000", location:"Dubai / Abu Dhabi"},
    {title:"Carpenters", openings:15, salary:"AED 3500", location:"Dubai / Abu Dhabi"},
    {title:"Security Guards", openings:20, salary:"AED 2700", location:"Dubai / Abu Dhabi"},
    {title:"General Labour", openings:60, salary:"AED 1700 - 2000", location:"Ras Al Khaimah"},
    {title:"Construction Helpers", openings:40, salary:"AED 1600 - 1900", location:"Ras Al Khaimah"},
    {title:"Factory Workers", openings:30, salary:"AED 1700 - 2100", location:"Ras Al Khaimah"}
  ];


  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">

      {/* HEADER */}
      <header className="flex justify-between items-center p-6 border-b bg-white">

        <div className="flex items-center gap-3">
          <img src="/merecruiters-logo.png" className="h-10" />
          <span className="text-xl font-bold text-blue-700">
            Middle East Recruiters
          </span>
        </div>

        <div className="flex items-center gap-6">

          <select
            value={lang}
            onChange={e=>setLang(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ur">Urdu</option>
            <option value="bn">Bengali</option>
            <option value="ar">Arabic</option>
          </select>

          <nav className="space-x-6 text-sm hidden md:block">
            <a href="#about">About</a>
            <a href="#jobs">Jobs</a>
            <a href="#candidates">Apply</a>
            <a href="#employers">Employers</a>
          </nav>

        </div>

      </header>


      {/* HERO */}
      <section className="relative py-32 px-6 text-center flex items-center justify-center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            {text.hero}
          </motion.h2>

          <div className="flex gap-4 justify-center flex-wrap">

            <Button
              onClick={()=>document.getElementById('candidates')?.scrollIntoView({behavior:'smooth'})}
              className="bg-blue-600 text-white">
              {text.apply}
            </Button>

            <Button
              onClick={()=>document.getElementById('employers')?.scrollIntoView({behavior:'smooth'})}
              variant="outline">
              {text.hire}
            </Button>

          </div>

        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-3xl font-semibold mb-6">
            {text.aboutTitle}
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            Middle East Recruiters has been operating for more than
            <strong> 13 years </strong> and has successfully placed
            <strong> 25,000+ candidates </strong> in companies across the
            United Arab Emirates including Dubai, Abu Dhabi and
            Ras Al Khaimah.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-6">
            We recruit workers from India, Pakistan, Nepal, Bangladesh,
            Sri Lanka, Myanmar, Thailand, Vietnam and several African
            countries for construction, logistics, security and
            manufacturing companies.
          </p>

        </div>

      </section>


      {/* JOB LISTINGS */}
      <section id="jobs" className="py-20 px-6 bg-blue-50">

        <h3 className="text-3xl font-semibold text-center mb-14">
          {text.jobs}
        </h3>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {jobs.map(job => (

            <Card key={job.title} className="bg-white shadow-lg border border-gray-100">

              <CardContent className="p-6 text-center space-y-2">

                <p className="font-semibold">{job.title}</p>
                <p className="text-sm text-gray-500">{job.location}</p>
                <p className="text-blue-700 font-semibold">{job.salary}</p>

                <Button
                  onClick={()=>document.getElementById('candidates')?.scrollIntoView({behavior:'smooth'})}
                  className="bg-blue-600 text-white w-full">
                  Apply
                </Button>

              </CardContent>

            </Card>

          ))}

        </div>

      </section>


      

      {/* JOB BENEFITS */}
      <section id="benefits" className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl font-semibold text-center mb-10">
            Why These Jobs Can Change Your Life
          </h3>

          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-lg">
            The job opportunities listed above allow workers to build a better
            future for themselves and their families. Thousands of people move
            to the UAE every year to earn higher salaries, gain international
            work experience and improve their living standards.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <Card className="bg-blue-50 border-none shadow">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">Higher Earnings</h4>
                <p className="text-gray-600 text-sm">
                  Salaries in the UAE are significantly higher than many
                  developing countries. Workers are able to save money and
                  send financial support to their families.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">Better Living Standards</h4>
                <p className="text-gray-600 text-sm">
                  Working in cities like Dubai, Abu Dhabi and Ras Al Khaimah
                  provides access to modern infrastructure, safer work
                  environments and professional working conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">Career Growth</h4>
                <p className="text-gray-600 text-sm">
                  Many workers start in entry‑level roles and grow into
                  supervisors, drivers or skilled technicians after gaining
                  experience in the Gulf job market.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">International Experience</h4>
                <p className="text-gray-600 text-sm">
                  Experience working in the UAE construction, logistics and
                  industrial sectors is respected globally and can open doors
                  to opportunities across the Middle East.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">Support For Families</h4>
                <p className="text-gray-600 text-sm">
                  Overseas income helps workers support their families,
                  improve education for children and invest in homes or
                  businesses in their home countries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none shadow">
              <CardContent className="p-6 space-y-3">
                <h4 className="font-semibold text-lg">Secure Employment</h4>
                <p className="text-gray-600 text-sm">
                  Through verified employers and structured recruitment,
                  workers receive legal employment contracts and stable
                  working opportunities in the UAE.
                </p>
              </CardContent>
            </Card>

          </div>

        </div>

      </section>


      {/* APPLY FORM */}
      <section id="candidates" className="py-20 px-6">

        <div className="max-w-3xl mx-auto">

          <h3 className="text-3xl font-semibold text-center mb-10">
            {text.applyForm}
          </h3>

          <Card className="bg-white shadow-xl">

            <CardContent className="p-8 space-y-5">

              <Input placeholder="Full Name" onChange={e=>setCandidate({...candidate,name:e.target.value})}/>

              <Input placeholder="WhatsApp Number" onChange={e=>setCandidate({...candidate,phone:e.target.value})}/>

              <Input placeholder="Country" onChange={e=>setCandidate({...candidate,country:e.target.value})}/>

              <Input placeholder="Job Skill" onChange={e=>setCandidate({...candidate,skill:e.target.value})}/>

              <Input type="file" onChange={e=>setCandidate({...candidate,cv:e.target.files[0]})}/>

              <Textarea placeholder="Work Experience" onChange={e=>setCandidate({...candidate,experience:e.target.value})}/>

              <Button
                onClick={submitCandidate}
                className="bg-green-600 text-white w-full">
                Submit Application
              </Button>

            </CardContent>

          </Card>

        </div>

      </section>


      {/* EMPLOYERS */}
      <section id="employers" className="py-20 px-6 bg-blue-50">

        <div className="max-w-3xl mx-auto">

          <h3 className="text-3xl text-center mb-8">
            {text.requestWorkers}
          </h3>

          <Card className="shadow-xl">

            <CardContent className="p-8 space-y-5">

              <Input placeholder="Company" onChange={e=>setEmployer({...employer,company:e.target.value})}/>

              <Input placeholder="Contact Person" onChange={e=>setEmployer({...employer,person:e.target.value})}/>

              <Input placeholder="Email" onChange={e=>setEmployer({...employer,email:e.target.value})}/>

              <Input placeholder="Phone" onChange={e=>setEmployer({...employer,phone:e.target.value})}/>

              <Textarea placeholder="Workers Required" onChange={e=>setEmployer({...employer,workers:e.target.value})}/>

              <Button onClick={submitEmployer} className="bg-blue-600 text-white w-full">
                Submit
              </Button>

            </CardContent>

          </Card>

        </div>

      </section>


      {/* CONTACT */}
      <section className="py-16 text-center">

        <p>Email: jobs@merecruiters.com</p>

        <Button
          onClick={()=>window.open('https://wa.me/971521120315','_blank')}
          className="bg-green-600 text-white mt-4">
          WhatsApp
        </Button>

      </section>


      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Middle East Recruiters
      </footer>


    </div>

  );
}
