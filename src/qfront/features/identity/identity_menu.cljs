(ns qfront.features.identity.identity-menu
  (:require
   [qfront.features.identity.identity-plank :as plank]
   [re-frame.core :as rf]))

(defn identity-menu []
  [:section {:id "users-layout"}
   [:h2 {:class "section-header"} "IDENTITY EDITOR"]
   (for [user @(rf/subscribe [:shown-identities])]
     ^{:key user} [plank/single-user-plank user])])