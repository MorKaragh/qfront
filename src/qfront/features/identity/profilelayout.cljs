(ns qfront.features.identity.profilelayout
  (:require
   [qfront.features.identity.identityplank :as plank]
   [qfront.shared.utils.mapUtils :as mapu]
   [re-frame.core :as rf]
   [reagent.core :as r]))


(defn left-menu []
  [:div {:id "left-menu"}
   [:section {:id "other-apps-layout"}
    [:h2 {:class "section-header"} "EXTERNAL APPS"]
    [:div {:id "mock-api-btn" :on-click 
           #(rf/dispatch [:on-framed-app-btn-click 
                         "https://mockapi.io/projects/62e8bda693938a545bea403c"])} 
     "MOCKAPI.IO"]]
   [:section {:id "users-layout"}
    [:h2 {:class "section-header"} "IDENTITY EDITOR"]
    (for [user @(rf/subscribe [:shown-identities])]
      ^{:key user} [plank/single-user-plank user])]])

