(ns qfront.app.scheduler
  (:require 
   [qfront.entities.identity.identityloader :as loader]))

(defn- reload-identities []
  (loader/load-identities))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(defonce do-timer (js/setInterval reload-identities 5000000))