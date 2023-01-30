(ns qfront.entities.identity.identityloader
  (:require-macros [cljs.core.async.macros :refer [go]]) 
  (:require 
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]
    [qfront.app.state :as state]))

(defn load-identities []
  (let [str "https://62e8bda693938a545bea403b.mockapi.io/api/v1/testable"]
    (go (let [response (<! (http/get str
                                    {:with-credentials? false
                                     :query-params {"since" 135}}))]
         (swap! state/multipasports #(reset! state/multipasports (:body response)))))))