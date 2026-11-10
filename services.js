// Service detail pop-ups (version 2 home page).
// Each service: title, intro, "can help with", "what to expect", and which providers to show.
(function () {
  const SERVICES = {
    dep: {
      icon: "🌤", title: "Depression & Anxiety",
      intro: "Almost everyone goes through periods of low mood, worry, or stress. When it starts getting in the way of sleep, work, relationships, or just getting through the day, therapy and medication can help. Many people use both.",
      helps: ["Ongoing sadness, emptiness, or loss of interest", "Constant worry, racing thoughts, or panic attacks", "Trouble sleeping, focusing, or getting motivated", "Stress, burnout, and life transitions"],
      expect: ["Your provider learns your history and what's going on now, then you set goals together", "Common approaches include CBT, DBT, and talk therapy", "If you'd like to look at medication, we can connect you with medication management"],
      q: "anxiety", label: "providers who treat anxiety",
    },
    trauma: {
      icon: "🧭", title: "Trauma & PTSD",
      intro: "After a traumatic experience, the brain can stay on high alert, as if the danger could happen again at any moment. Trauma-informed counseling, medication, or both can help your nervous system settle and let you feel safe again.",
      helps: ["Flashbacks, nightmares, or intrusive memories", "Feeling on edge, numb, or easily startled", "Childhood trauma and complex PTSD (C-PTSD)", "Abuse, assault, accidents, loss, and other traumatic events"],
      expect: ["You set the pace. You don't have to share details before you're ready", "Approaches include EMDR, somatic therapy, Brainspotting, IFS, and trauma-focused CBT", "Medication can be added to help with sleep, anxiety, or mood"],
      q: "trauma", label: "trauma-informed providers",
    },
    couples: {
      icon: "🤝", title: "Couples & Relationships",
      intro: "Every relationship hits rough patches. Couples counseling gives you both a neutral space to understand each other, break negative patterns, and rebuild connection, even after a serious breach of trust like infidelity.",
      helps: ["Constant arguing or the same fight on repeat", "Communication breakdowns and emotional distance", "Infidelity and rebuilding trust", "Intimacy, life transitions, and premarital counseling"],
      expect: ["Usually both partners attend, sometimes with individual sessions too", "Evidence-based methods such as the Gottman Method and Emotionally Focused Therapy (EFT)", "Practical tools to use at home between sessions"],
      q: "couple", label: "providers who see couples",
    },
    meds: {
      icon: "💊", title: "Medication Management",
      intro: "A trained professional can evaluate you and, if it makes sense, prescribe medication. That might mean starting treatment for the first time, supporting progress you've already made in therapy, or just learning what your options are.",
      helps: ["Depression and anxiety", "ADHD", "Bipolar disorder and mood stability", "Sleep problems and trauma-related symptoms"],
      expect: ["A first evaluation covering your symptoms, history, and any current medications", "Follow-up visits to check how it's working and adjust if needed", "Available in person or online anywhere in Colorado"],
      q: null,
    },
    emdr: {
      icon: "👁", title: "EMDR Therapy",
      intro: "EMDR (Eye Movement Desensitization and Reprocessing) is one of the most researched therapies for trauma. It helps the brain reprocess painful memories so they lose their emotional charge, often faster than talk therapy alone.",
      helps: ["PTSD and trauma", "Anxiety, panic, and phobias", "Depression", "Painful memories that still feel \"stuck\""],
      expect: ["Your provider first helps you build coping skills and feel grounded", "While you briefly focus on a memory, you follow guided eye movements, taps, or tones", "You don't have to describe every detail of what happened"],
      q: "emdr", label: "EMDR-trained providers",
    },
    family: {
      icon: "🏡", title: "Family Counseling",
      intro: "Families go through a lot together: conflict, divorce, blended households, a new diagnosis, grief. Family counseling helps everyone feel heard, work through the hard stuff, and strengthen how you connect.",
      helps: ["Parent–teen conflict and communication problems", "Divorce, co-parenting, and blended families", "Grief, illness, or major life changes", "Supporting a family member with mental health struggles"],
      expect: ["Sessions may include the whole family, some members, or a mix", "Your provider looks at patterns in the family as a whole, not just one person", "Practical strategies to use at home"],
      q: "family", label: "providers who work with families",
    },
    pcit: {
      icon: "🧸", title: "Parent-Child Interaction Therapy (PCIT)",
      intro: "PCIT is an evidence-based treatment that focuses on the back-and-forth between parents and young children. Improving that connection helps a child feel secure, manage big emotions, and grow more independent.",
      helps: ["Tantrums, defiance, and aggressive behavior", "Attachment and bonding", "Emotional regulation", "Parenting stress"],
      expect: ["Usually for young children and their parents or caregivers", "A therapist coaches you in real time as you play with your child", "You practice short daily play sessions at home"],
      q: "child", label: "providers who work with children",
    },
    tele: {
      icon: "💻", title: "Telehealth (Online Therapy & Medication)",
      intro: "See your therapist or prescriber by video or phone from anywhere in Colorado. No commute, no waiting room, the same quality of care.",
      helps: ["Busy schedules and long commutes", "Rural areas with few local options", "Anyone more comfortable at home", "Both therapy and medication management"],
      expect: ["A device with a working camera", "A reliable internet connection", "A private space where you can talk freely"],
      q: "", label: "providers", all: true,
    },
  };

  const dlg = document.getElementById("svcDialog");
  const li = arr => "<ul>" + arr.map(x => `<li>${x}</li>`).join("") + "</ul>";

  function open(key) {
    const s = SERVICES[key];
    document.getElementById("svcIcon").textContent = s.icon;
    document.getElementById("svcTitle").textContent = s.title;
    document.getElementById("svcBody").innerHTML =
      `<p class="svc-intro">${s.intro}</p>
       <div class="svc-cols"><div><h3>Can help with</h3>${li(s.helps)}</div>
       <div><h3>What to expect</h3>${li(s.expect)}</div></div>`;
    let foot = "";
    if (s.q !== null && typeof PROVIDERS !== "undefined") {
      // same matching rule as the provider directory search, so the number always agrees
      const n = PROVIDERS.filter(p => p.join(" ").toLowerCase().includes(s.q.replace(/(ies|y)$/, ""))).length;
      foot += `<a class="btn btn-outline" href="providers-v2.html${s.q ? "?q=" + encodeURIComponent(s.q) : ""}">${s.all ? "Browse all" : "See"} ${n} ${s.label} →</a>`;
    }
    foot += `<a class="btn btn-primary" href="https://www.highersightscounseling.com/contact/">Find a provider</a>`;
    document.getElementById("svcFoot").innerHTML = foot;
    dlg.showModal();
  }

  document.querySelectorAll(".svc").forEach(b => b.addEventListener("click", () => open(b.dataset.svc)));
  // click outside the box closes it
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
})();
