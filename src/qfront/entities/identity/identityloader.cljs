(ns qfront.entities.identity.identityloader
  (:require-macros [cljs.core.async.macros :refer [go]]) 
  (:require 
    [re-frame.core :as rf]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))


(defn- parse-body [data]
  (into (sorted-map) (map (fn [m] [(:id m) m]) data)))

(defn load-identities []
  (let [str "https://62e8bda693938a545bea403b.mockapi.io/api/v1/testable"]
    (go (let [response (<! (http/get str
                                    {:with-credentials? false
                                     :query-params {"since" 135}}))]
          (prn (parse-body response))
          (rf/dispatch [:load-users (parse-body(:body response))])))))