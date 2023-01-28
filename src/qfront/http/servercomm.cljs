(ns qfront.http.servercomm
  (:require-macros [cljs.core.async.macros :refer [go]]) 
  (:require 
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(defn query-test [str]
  (go (let [response (<! (http/get str
                                   {:with-credentials? false
                                    :query-params {"since" 135}}))]
        (prn (last (:body response))))))