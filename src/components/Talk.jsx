import React, { useEffect, useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Star,
  ShieldCheck,
  Phone,
  Video,
  MessageSquare,
  ChevronDown,
  Send,
} from "lucide-react";

export default function Talk() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [place, setPlace] = useState("");
  const [consultType, setConsultType] = useState("chat");
  const [language, setLanguage] = useState("");
  const [showLang, setShowLang] = useState(false);
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [touched, setTouched] = useState({});
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFade(true), 60);
    return () => clearTimeout(t);
  }, []);

  const languages = ["English", "Hindi", "Bengali", "Marathi", "Gujarati", "Tamil", "Telugu"];
  const topics = ["Love & Relationship", "Marriage", "Career", "Education", "Finance", "Health", "Business", "Family", "Vastu", "Other"];

  const isInvalid = (field) => {
    if (!touched[field]) return false;
    if (field === "name") return name.trim() === "";
    if (field === "dob") return dob === "";
    if (field === "topic") return topic === "";
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, dob: true, topic: true });
    if (!name.trim() || !dob || !topic) return;
    console.log({ name, gender, dob, tob, place, consultType, language, topic, question });
    alert("Enquiry sent — we will reach out with recommended astrologers.");
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-[#05051a] via-[#0b0b1a] to-[#0f1024] text-white py-12 px-4">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-800 to-purple-700 blur-3xl opacity-30" />
        <div className="absolute right-[-80px] top-20 h-96 w-96 rounded-full bg-gradient-to-br from-orange-500 to-yellow-400 blur-3xl opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl">
        <header className={`mb-8 ${fade ? "opacity-100" : "opacity-0 translate-y-2"} transition-all duration-500`}>
          <span className="inline-block rounded-full bg-gradient-to-r from-indigo-700/20 to-purple-700/10 px-3 py-1 text-sm font-medium text-indigo-200/90 backdrop-blur">Talk to Astrologer</span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight">Tell Us About Yourself</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/70">Provide a few details so we can recommend the most suitable astrologer.</p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="col-span-2">
            <div className="rounded-[20px] bg-white/4 p-6 backdrop-blur-md shadow-xl ring-1 ring-white/6">
              <section className="space-y-4">
                <h2 className="text-lg font-medium">Personal Information</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={() => setTouched((s) => ({ ...s, name: true }))} placeholder=" " className={`peer w-full rounded-[20px] bg-white/6 px-4 py-3 text-white placeholder-transparent focus:outline-none ${isInvalid("name") ? "ring-2 ring-red-400/60" : ""}`} aria-label="Full name" />
                    <label htmlFor="name" className="pointer-events-none absolute left-4 -top-2 rounded-full bg-gradient-to-r from-[#04040a]/50 to-transparent px-2 text-xs text-white/80 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs">Full Name</label>
                    {isInvalid("name") && <p className="mt-1 text-sm text-red-300">Full name is required</p>}
                  </div>

                  <div>
                    <div className="text-sm text-white/80 mb-2">Gender</div>
                    <div className="flex gap-2">
                      {[{ id: "male", label: "Male" }, { id: "female", label: "Female" }, { id: "other", label: "Other" }].map((g) => (
                        <button key={g.id} type="button" onClick={() => setGender(g.id)} className={`rounded-full px-4 py-2 text-sm transition-all ${gender === g.id ? "bg-gradient-to-r from-amber-400 to-yellow-300 text-black shadow-md" : "bg-white/6 text-white/80 hover:bg-white/8"}`}>{g.label}</button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className={`flex items-center gap-2 rounded-[20px] bg-white/6 px-3 py-2 ${isInvalid("dob") ? "ring-2 ring-red-400/60" : ""}`}>
                    <Calendar className="text-white/70" />
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} onBlur={() => setTouched((s) => ({ ...s, dob: true }))} className="w-full bg-transparent text-white outline-none" aria-label="Date of birth" />
                  </div>

                  <div className="flex items-center gap-2 rounded-[20px] bg-white/6 px-3 py-2">
                    <Clock className="text-white/70" />
                    <input type="time" value={tob} onChange={(e) => setTob(e.target.value)} className="w-full bg-transparent text-white outline-none" aria-label="Time of birth" />
                  </div>

                  <div className="relative flex items-center gap-2 rounded-[20px] bg-white/6 px-3 py-2">
                    <MapPin className="text-white/70" />
                    <input value={place} onChange={(e) => setPlace(e.target.value)} placeholder=" " className="w-full bg-transparent text-white outline-none" aria-label="Place of birth" />
                    <label className="pointer-events-none absolute left-10 -top-2 rounded-full bg-gradient-to-r from-[#04040a]/50 to-transparent px-2 text-xs text-white/80">Place of Birth</label>
                  </div>
                </div>
              </section>

              <hr className="my-6 border-white/6" />

              <section className="space-y-4">
                <h3 className="text-lg font-medium">Consultation Details</h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  {[{ id: "chat", label: "💬 Chat", icon: MessageSquare }, { id: "phone", label: "📞 Voice Call", icon: Phone }, { id: "video", label: "🎥 Video Call", icon: Video }].map((c) => {
                    const Icon = c.icon;
                    return (
                      <button key={c.id} type="button" onClick={() => setConsultType(c.id)} className={`group rounded-[18px] px-4 py-3 text-left transition-all ${consultType === c.id ? "bg-gradient-to-r from-amber-400/15 to-yellow-300/10 ring-1 ring-amber-300/25 shadow-md" : "bg-white/6 hover:bg-white/8"}`}>
                        <div className="flex items-center gap-3">
                          <div className={`grid h-10 w-10 place-items-center rounded-lg ${consultType === c.id ? "bg-amber-400 text-black" : "bg-white/8 text-white/80"}`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-medium">{c.label}</div>
                            <div className="text-sm text-white/70">Secure & private</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="relative">
                    <div className="flex items-center gap-2 rounded-[20px] bg-white/6 px-3 py-2">
                      <Search className="text-white/70" />
                      <input value={language} onChange={(e) => setLanguage(e.target.value)} onFocus={() => setShowLang(true)} onBlur={() => setTimeout(() => setShowLang(false), 160)} placeholder="Preferred language" className="w-full bg-transparent text-white outline-none" aria-label="Preferred language" />
                      <ChevronDown className="text-white/70" />
                    </div>
                    {showLang && (
                      <ul className="mt-2 max-h-44 w-full overflow-auto rounded-lg bg-white/5 p-2 backdrop-blur">
                        {languages.filter((l) => l.toLowerCase().includes(language.toLowerCase())).map((l) => (
                          <li key={l} onMouseDown={() => setLanguage(l)} className="cursor-pointer rounded-md px-3 py-2 hover:bg-white/10">
                            {l}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <select value={topic} onChange={(e) => setTopic(e.target.value)} onBlur={() => setTouched((s) => ({ ...s, topic: true }))} className={`w-full rounded-[20px] bg-white/6 px-3 py-2 text-white outline-none ${isInvalid("topic") ? "ring-2 ring-red-400/60" : ""}`}>
                      <option value="">Select consultation topic</option>
                      {topics.map((t) => (
                        <option key={t} value={t} className="text-black">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </section>

              <hr className="my-6 border-white/6" />

              <section className="space-y-3">
                <h4 className="text-lg font-medium">Your Question</h4>
                <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Briefly describe your concern or question..." className="w-full min-h-[140px] rounded-[20px] bg-white/6 p-4 text-white placeholder-white/60 outline-none" />
              </section>

              <div className="mt-6">
                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 rounded-[20px] bg-gradient-to-r from-orange-400 to-yellow-300 px-5 py-3 font-semibold text-black shadow-lg transition hover:shadow-2xl hover:scale-[1.01]">
                  <Send size={16} />
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>

          <aside className="order-first mb-4 lg:order-last lg:mb-0 lg:col-span-1">
            <div className="rounded-[20px] bg-white/5 p-6 backdrop-blur-md shadow-xl ring-1 ring-white/6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-amber-400/10 p-2 text-amber-300">
                  <Star />
                </span>
                <div>
                  <h5 className="text-lg font-semibold">Premium Info</h5>
                  <p className="mt-1 text-sm text-white/70">Verified, secure and instant consultations.</p>
                </div>
              </div>

              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Star className="text-amber-300 mt-1" />
                  <div>
                    <div className="font-medium">Verified Astrologers</div>
                    <div className="text-white/70">Profiles verified by our team</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="text-green-400 mt-1">🟢</div>
                  <div>
                    <div className="font-medium">Instant Availability</div>
                    <div className="text-white/70">Connect quickly when available</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <ShieldCheck className="text-amber-300 mt-1" />
                  <div>
                    <div className="font-medium">100% Private & Secure</div>
                    <div className="text-white/70">Encrypted conversations</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="text-white/80 mt-1" />
                  <div>
                    <div className="font-medium">Voice, Chat & Video</div>
                    <div className="text-white/70">Multiple consultation modes</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="text-white/80 mt-1">⏱</div>
                  <div>
                    <div className="font-medium">Avg. Connection Time</div>
                    <div className="text-white/70">Under 60 Seconds</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Star className="text-amber-300 mt-1" />
                  <div>
                    <div className="font-medium">4.9 Rating</div>
                    <div className="text-white/70">From thousands of happy users</div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
