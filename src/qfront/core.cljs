(ns qfront.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [qfront.utils.jsutils :as u]
   [reagent.core :as r]
   [reagent.dom :as d]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

;; -------------------------
;; Views

(def multipasports (r/atom [{}]))


(defn single-user-plank [user]
  [:div {:key (:id user) :class "user-profile"}
   [:img {:src (:avatar user) :class "user-avatar"}]
   [:div {:class "user-description"}
    [:h4 {:class "user-name"} (str "Name: " (:name user))]
    [:ul {:class "user-attributes"}
     (for [attr (keys (dissoc user :name :avatar :id :roles))]
       [:li (str  (str/replace-first (str attr) ":" "") " : " (user attr))])]]])


(defn user-profile-layout [{createdAt :createdAt
                            name :name
                            avatar :avatar}]
  [:div {:id "users-layout"}
   (for [user @multipasports]
     (single-user-plank user))])

(defn load-users [url]
  (go (let [response (<! (http/get
                          url
                          {:with-credentials? false
                           :query-params {"since" 135}}))]
        (swap! multipasports #(reset! multipasports (:body response))))))

(defn operation-layout []
  [:div {:id "operation-layout"}
   [:label "test"]])

(defn header-controls []
  [:div {:id "header-controls"}
   [:button {:on-click (fn [x] (prn (str "Mul: " @multipasports)))} "TEST"]
   [:button {:on-click (fn [x] (prn (str "Mul: " @multipasports)))} "TEST 1"]
   [:button {:on-click (fn [x] (prn (str "Mul: " @multipasports)))} "TEST 2"]])

(defn home-page []
  [:div {:id "main-page"} 
   [:header 
    [:h2 "People of the world"]
    [header-controls]]
   [:main {:id "working-zone"}
    [user-profile-layout] 
    [operation-layout]]])

(do
  (load-users "https://62e8bda693938a545bea403b.mockapi.io/api/v1/testable"))



;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
