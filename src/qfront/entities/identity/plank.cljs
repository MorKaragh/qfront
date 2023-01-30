(ns qfront.entities.identity.plank
  (:require [clojure.string :as str]))

(defn single-user-plank [user handler] 
  [:div {:key (:id user) :class "user-profile" :on-click #(handler user)}
   [:img {:src (:avatar user) :class "user-avatar"}]
   [:div {:class "user-description"}
    [:h4 {:class "user-name"} (str "Name: " (:name user))]
    [:ul {:class "user-attributes"}
     (for [attr (keys (dissoc user :name :avatar :id :roles))]
       [:li {:key (str (:id user)"-" (str attr))} 
        (str  (str/replace-first (str attr) ":" "") " : " (user attr))])]]])

