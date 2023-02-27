(ns qfront.features.identity.identity-editor
    (:require [qfront.features.identity.left-menu :refer [left-menu]]
              [qfront.features.identity.operation-layout :refer [right-part]]))

(defn identity-editor []
  [:main {:id "working-zone"}
   [left-menu]
   [right-part]])