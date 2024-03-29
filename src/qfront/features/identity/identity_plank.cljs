(ns qfront.features.identity.identity-plank
  (:require [clojure.string :as str]
            [re-frame.core :as rf]))

(defn avatar-url [user]
  (let [url "http://localhost:3001/"
        id (:id user)]
   (case (:sex user)
     "female" (str url "pixel-f?seed=" id)
     "male" (str url "pixel-m?seed=" id)
     :else (str url "cat?seed=" id))))

(defn single-user-plank [user]
  (let [selected-ids @(rf/subscribe [:selected-ids])]
    [:div {:class (if (contains?  selected-ids (:id user))
                    "user-profile selected-plank"
                    "user-profile ")
           :on-click #(rf/dispatch [:plank-click (:id user)])}
     [:img {:src (:avatar user) :class "user-avatar"}]
    ;;  [:img {:src (avatar-url user) :class "user-avatar"}]
     [:div {:class "user-description"}
      [:h4 {:class "user-name"} (str "Name: " (:name user))]
      [:ul {:class "user-attributes"}
       (for [attr (keys (dissoc user :name :avatar :id :roles :x-is-selected))]
         [:li {:key (str (:id user) "-" (str attr))}
          (str  (str/replace-first (str attr) ":" "") " : " (user attr))])]]]))

