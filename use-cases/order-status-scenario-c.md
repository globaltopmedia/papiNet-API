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
    * "Rejected"

We might add some explanation on the link between the status at the header level and the statuses from the items level (kind of matrix).

  --
  * Total Quantity (57 400 kg)(108 units) {REMOVED #1}
  OR
  * Total Requested Quantity {#1}
  * Total Confirmed Quantity {#1}
  --
  * Number of Order Line Items (1) {we keep it, 2020-09-23}
  
  {ON HOLD, may become separate API endpoint}
  * Link to PDF documents
    * Order confirmation
    * Delivery note
    * Invoice
    * "..."

#1 We consciously removed the << * Total Quantity (57 400 kg)(108 units) >> field/property for the header because we want to keep the header as lean as possible, the total can still be calculated from the lines. Ambiguity around Requested vs. Confirmed. In case of reels, they are different.

* Items

  { MAYBE THESE TRANSPORT STUFF MIGHT GO to the /delieveries}
  * Ship-From Details (TILBURY (GB))
  * Ship-To Details (CLAYS LTD)
  ---
  * Transportation Partner Details (None)
  * Transportation Partner Delivery Reference (None)
  * Delivery Terms (None)
  ---
  OR { how much of the delivery stuff do we want to put here }
  ---
  * Transporter Details:
  * Transporter Shipment ID:
  * Requested Delivery Date (2020-07-24)
  * ETA (2020-07-31)
  ---
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
  
  * Production Unit Details (...) -- Mill
