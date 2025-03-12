import React from 'react';
import { Moon, Users, Calendar, Award, ChevronDown } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-white" style={{
      backgroundImage: 'radial-gradient( circle 710px at 5.2% 7.2%, rgba(37,89,222,1) 0%, rgba(37,89,222,1) 7.5%, rgba(4,4,29,1) 44.7% )'
    }}>
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Moon className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">DC Sleep Society</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-200 transition">HOME</button>
                <button onClick={() => scrollToSection('about')} className="hover:text-blue-200 transition">ABOUT</button>
                <button onClick={() => scrollToSection('events')} className="hover:text-blue-200 transition">EVENTS</button>
                <button onClick={() => scrollToSection('membership')} className="hover:text-blue-200 transition">MEMBERSHIP</button>
                <button onClick={() => scrollToSection('sponsors')} className="hover:text-blue-200 transition">SPONSORS</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1455642305367-68834a9c8827?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[400px] object-cover rounded-2xl mb-8"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to the DC Sleep Society</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            The DC Sleep Society is a dedicated community of Sleep Medicine professionals committed to advancing education, clinical excellence, and advocacy in the field of sleep health. We strive to promote the highest standards in sleep diagnostics and therapy, increase awareness of sleep disorders and their treatment, and support ongoing professional development for healthcare providers engaged in Sleep Medicine.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <Users className="h-12 w-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-4">Professional Community</h3>
            <p className="text-blue-100">Bringing together Sleep Medicine specialists, technologists, and healthcare professionals to foster collaboration.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <Calendar className="h-12 w-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-4">Educational Events</h3>
            <p className="text-blue-100">Regular workshops, seminars, and conferences to enhance knowledge and skills in sleep medicine.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <Award className="h-12 w-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-4">Clinical Excellence</h3>
            <p className="text-blue-100">Promoting the highest standards in sleep diagnostics and therapy through continuous education.</p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="about" className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl mb-12">
            <p className="text-xl leading-relaxed">
              The DC Sleep Society fosters a collaborative, multidisciplinary community of healthcare professionals dedicated to advancing Sleep Medicine. Through networking, professional support, and education, we unite those who are passionate about Sleep Medicine across different disciplines to share knowledge, exchange ideas, and enhance awareness of sleep health. By strengthening connections and promoting excellence, we strive to elevate the field of Sleep Medicine and improve patient care.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl mb-12">
            <p className="text-xl leading-relaxed mb-8">
              The DC Sleep Society is dedicated to advancing the field of sleep medicine through education, advocacy, and the promotion of the highest clinical standards. We strive to enhance scientific and technical excellence in sleep diagnostics and therapy while fostering public trust in sleep health professionals. With a commitment to increasing awareness of sleep disorders and their treatment, we support training and professional development for all healthcare providers engaged in Sleep Medicine.
            </p>
            <p className="text-xl leading-relaxed">
              As a unified voice, we advocate for measures to improve patient care and outcomes. We foster a collaborative, multidisciplinary community by facilitating networking opportunities, supporting local colleagues, and uniting sleep professionals across various specialties to share knowledge, exchange ideas, and strengthen the field of Sleep Medicine.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Leadership</h3>
            
            <div className="space-y-12">
              {/* President */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">President - Ashtaad Dalal, MD</h4>
                <blockquote className="border-l-4 border-blue-300 pl-4 mb-4 italic text-blue-100">
                  "The average human being sleeps for one third of their life – there is no question that sleep plays a significant role in our lives, and affects every individual's health differently. I believe that there is a great value in developing meaningful relationships, based on trust, and providing personalized care specific to every patient's needs."
                </blockquote>
                <p className="mb-2">PMA Health</p>
                <div className="space-y-1">
                  <a href="https://www.linkedin.com/in/ashtaaddalal/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn Profile</a>
                  <br />
                  <a href="https://www.myprivia.com/mypmahealth/providers/dr-ashtaad-dalal" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Provider Profile</a>
                </div>
              </div>

              {/* Vice President */}
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Vice President - Karina Jordan, MD</h4>
                <p className="mb-2">Capital Neurology</p>
                <p className="mb-4">Board Certifications: Sleep Medicine and Obesity Medicine</p>
                <div className="space-y-1">
                  <a href="https://www.linkedin.com/in/karina-jordan-sleep-and-weight-management/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn Profile</a>
                  <br />
                  <a href="https://www.myprivia.com/capitalneurologymd/providers/dr-karina-jordan" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Provider Profile</a>
                </div>
              </div>

              {/* Board Members */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Board Members</h4>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <p className="font-semibold mb-2">Vivek Jain, MD (former President)</p>
                    <p className="mb-4">Associate Professor of Medicine | Director, GW Sleep Disorders Center</p>
                    <a href="https://gwdocs.com/profile/vivek-jain" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">Profile</a>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <p className="font-semibold mb-2">Nargues Weir, MD</p>
                    <p className="mb-4">FDA, Medical Officer; Office of Orphan Product Designation</p>
                    <a href="https://www.linkedin.com/in/nargues-weir-443715256/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">LinkedIn Profile</a>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl">
                    <p className="font-semibold mb-2">Shawn Kimbro</p>
                    <p>Technical Director of the Sleep Medicine program at George Washington University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Annual Sleep Medicine Symposium</h3>
              <p className="text-blue-100 mb-4">Join us for our flagship event featuring leading experts in sleep medicine, innovative research presentations, and networking opportunities.</p>
              <div className="text-sm text-blue-200">Date: September 2024</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Sleep Technology Workshop</h3>
              <p className="text-blue-100 mb-4">A hands-on workshop covering the latest advances in sleep diagnostic technology and therapeutic devices.</p>
              <div className="text-sm text-blue-200">Date: November 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Membership Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Professional Members</h3>
              <ul className="space-y-4 text-blue-100">
                <li>• Access to exclusive educational resources</li>
                <li>• Discounted event registration</li>
                <li>• Networking opportunities</li>
                <li>• Quarterly newsletter subscription</li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Student Members</h3>
              <ul className="space-y-4 text-blue-100">
                <li>• Mentorship opportunities</li>
                <li>• Research presentation platforms</li>
                <li>• Career development resources</li>
                <li>• Reduced membership fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Sponsors</h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
            <p className="text-xl mb-6">We are grateful for the support of our corporate partners who help advance sleep medicine education and research.</p>
            <p className="text-blue-200">Contact us to learn more about sponsorship opportunities.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Moon className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">DC Sleep Society</span>
          </div>
          <p className="text-blue-200">Join us in shaping the future of sleep health and making a lasting impact on patient care.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;