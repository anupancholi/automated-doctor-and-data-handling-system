function predict_Disease() {
    const symp1 = document.getElementById("symp1").value;
    const symp2 = document.getElementById("symp2").value;
    const symp3 = document.getElementById("symp3").value;
    
    if (symp1 === "itching" && symp2 === "skin_rash" && symp3==="nodal_skin_eruption") {
      return "You are likely to have fungal infection.";
    } else if (symp1 === "shivering" && symp2 === "chills" && symp3==="watery_eyes") {
      return "You are likely to have an allergy.";
    } else if(symp1 ==="stomcah_pain" && symp2==="acidity" && symp3==="ulcers_on_tongue"){
      return " You are likely to have GRED";
    } else if(symp1=="itching" && symp2=="vomitting" && symp3=="nausea"){
      return "You are likely to have Chronic cholestasis";
    } else if(symp1=="headache" && symp2=="chest_pain" && symp3=="dizziness"){
      return "You are likely to have Hypertension";
    } else if(symp1=="indigestion" && symp2=="loss_of_appetite" && symp3 == "abdominal_pain"){
      return "You are likely to have Peptic ulcer disease";
    } else if( symp1=="throat_patches" && symp2=="high_fever" && symp3=="restlessness"){
      return "You are likely to have AIDS";
    } else if(symp1=="fatigue" && symp2=="weight_loss" && symp3=="restlessness"){
      return "You are likely to have diabetes";
    } else if (symp1=="sunken_eyes" && symp2=="dehydration" && symp3=="diarrhoea"){
      return "You are likely to have Gastroenteritis";
    } else if (symp1=="cough" && symp2=="high_fever" && symp3=="breathlessness"){
      return "You are likely to have Bronchial asthma";
    }
    
      else {
      return "We were unable to determine your illness.";
    }
  }