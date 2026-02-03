const phone = "+77752709238";
const wa = "https://wa.me/77752709238";
const ig = "https://www.instagram.com/beco_team?igsh=NjVxZzNqbmNjazll";

const data = {
  uz:{
    title:"Yoqilg‘ini tejang, mashinani asrang",
    desc:"B-ECO Fuel Tabs — dvigatel samaradorligini oshiruvchi zamonaviy mahsulot.",
    c1t:"⛽️ Tejamkor",
    c1d:"Yoqilg‘i sarfini 10–20% kamaytiradi",
    c2t:"⚙️ Himoya",
    c2d:"Dvigatelni tozalaydi va asraydi",
    c3t:"🌱 Ekologik",
    c3d:"Zararli chiqindilarni kamaytiradi",
    faqTitle:"Savol – Javob",
    q1:"Qanday ishlaydi?",
    a1:"Yoqilg‘ining to‘liq yonishiga yordam beradi.",
    q2:"Qanday qo‘llanadi?",
    a2:"1 tabletka 60–70 litr yoqilg‘i uchun.",
    q3:"Qaysi mashinalarga mos?",
    a3:"Benzin va dizel mashinalar uchun.",
    bizTitle:"Biznes imkoniyati",
    bizDesc:"Agar daromad qilish va liderlik olishni istasangiz — biz bilan ishlang."
  },

  kz:{
    title:"Отынды үнемдеңіз, көлікті қорғаңыз",
    desc:"B-ECO Fuel Tabs — қозғалтқыш тиімділігін арттырады.",
    c1t:"⛽️ Үнем",
    c1d:"Отын шығынын азайтады",
    c2t:"⚙️ Қорғау",
    c2d:"Қозғалтқышты тазартады",
    c3t:"🌱 Экология",
    c3d:"Зиянды қалдықтарды азайтады",
    faqTitle:"Сұрақ – Жауап",
    q1:"Қалай жұмыс істейді?",
    a1:"Отынның толық жануына көмектеседі.",
    q2:"Қалай қолданылады?",
    a2:"1 таблетка 60–70 литрге.",
    q3:"Қандай көліктерге?",
    a3:"Бензин және дизель.",
    bizTitle:"Бизнес мүмкіндігі",
    bizDesc:"Табыс пен лидерлікке ұмтылсаңыз — бізге қосылыңыз."
  },

  ru:{
    title:"Экономьте топливо, берегите авто",
    desc:"B-ECO Fuel Tabs — современное решение для двигателя.",
    c1t:"⛽️ Экономия",
    c1d:"Снижает расход топлива",
    c2t:"⚙️ Защита",
    c2d:"Очищает двигатель",
    c3t:"🌱 Экология",
    c3d:"Меньше вредных выбросов",
    faqTitle:"Вопрос – Ответ",
    q1:"Как работает?",
    a1:"Способствует полному сгоранию топлива.",
    q2:"Как применять?",
    a2:"1 таблетка на 60–70 литров.",
    q3:"Для каких авто?",
    a3:"Бензин и дизель.",
    bizTitle:"Бизнес возможность",
    bizDesc:"Хотите доход и лидерство — присоединяйтесь."
  }
};

function setLang(l){
  Object.keys(data[l]).forEach(id=>{
    document.getElementById(id).innerText = data[l][id];
  });

  callBtn.href = "tel:" + phone;
  waBtn.href = wa;
  igBtn.href = ig;
}

setLang("uz");
