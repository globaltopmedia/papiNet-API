# Order Status Scenario C

## The Question

The _Buyer_ requests to the _Supplier_ the status of **one** of its _Order_.

### Input/Parameter

* The _UUID_ of the _Order_ created by the _Supplier_ when it received it from the _Buyer_.

## The Answer

* Header

  * Buyer Purchase Order Number (1319)
  * Buyer Purchase Order Date (2020-07-05)
  * Supplier Sales Order Number (ANGB-000889-001)
  * Supplier Sales Order Status (Completed)
    * "Active"
    * "Cancelled"
    * "Completed"
  --
  * Total Quantity (57 400 kg)(108 units) {REMOVED #1}
  OR
  * Total Requested Quantity {#1}
  * Total Confirmed Quantity {#1}
  --
  * Number of Order Lines (1) {As a query parameter?}
  * Transportation Partner Details (...)
  * Transportation Partner Delivery Reference (...)
  * Delivery Terms
  * Link to PDF documents
    * Order confirmation
    * Delivery note
    * Invoice
    * "..."

#1 We consciously removed the << * Total Quantity (57 400 kg)(108 units) >> field/property for the header because we want to keep the header as lean as possible, the total can still be calculated from the lines. Ambiguity around Requested vs. Confirmed. In case of reels, they are different.

* Items

  * Ship-From Details (TILBURY (GB))
  * Ship-To Details (CLAYS LTD)
  * Status
    * "Sales Order Created"
    * "Production started"
    * "Fully Produced"
    * "Partly Delivered"
    * "Fully Delivered"
    * "..."
  * Buyer Product Details (...) -- Specification
  * Supplier Product Details (...) -- Specifiation
  * Confirmed Quantities -- OrderQty in KG and Sheets
    * Number of pieces
    * M2
    * M3
-- Qty Produced
-- Qty QtyOnStock
-- Qty AvailableforCallOff
  * Delivered Quantity
    * Number of pieces
    * M2
    * M3
  * Requested Delivery Date (2020-07-24)
  * ETA (2020-07-31)
  * Production Unit Details (...) -- Mill
