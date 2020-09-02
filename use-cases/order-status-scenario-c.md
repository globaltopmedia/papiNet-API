# Order Status Scenario C

## The Question

The _Buyer_ requests to the _Supplier_ the status of one of its _Order_.

### Input/Parameter

* The _UUID_ of the _Order_ created by the _Supplier_ when it received it from the _Buyer_.

## The Answer

* Header

  * Buyer Purchase Order Number --  CustomerOrderNumber
  * Supplier Sales Order Number -- OrderNumber
  * Supplier Sales Order Date
  * Supplier Sales Order Status -- Status
    * "Sales Order Created"
    * "Production started"
    * "Fully Produced"
    * "Partly Delivered"
    * "Fully Delivered"
    * "..."
  * Ship-From Details (...) 
  * Ship-To Details (...) -- DeliveryAddress
  * Transportation Partner Details (...)
  * Transportation Partner Delivery Reference (...)
  * Delivery Terms
  * Total Ordered/Requested Quantity
  * Link to PDF documents
    * Order confirmation
    * Delivery note
    * Invoice
    * "..."

* Items

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
  * Requested Delivery Date -- DeliveryDate and Type
  * ETA -- DeliveryDate and Type
  * Production Unit Details (...) -- Mill
