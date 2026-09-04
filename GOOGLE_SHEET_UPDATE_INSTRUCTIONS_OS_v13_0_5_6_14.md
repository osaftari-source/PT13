# Required Google Sheet Update — SBN Existing Coupon Attribution

The PWA patch supports the new category, but it does not change your live Google Sheet automatically. Complete these steps in the Google Sheet used by PortOS.

## 1. Add new category in `Config_Categories`
Add a row using the same column structure as the existing income categories:

| category_id | display_name | transaction_type | active | allow_transaction_entry | is_regular_plan_category | include_in_expense_filter | include_in_budget_analysis | include_in_spending_composition | include_in_spending_rate | include_in_investment_earnings | display_order | notes |
|---|---|---|---|---|---|---|---|---|---|---|---:|---|
| sbn_existing_coupon | SBN Existing Coupon | income | TRUE | TRUE | TRUE | FALSE | FALSE | FALSE | FALSE | TRUE | 35 | Cash coupon income from existing SBN holding |

Do not delete or rename `sr025_coupon`. It remains the category for **SR025 T5** coupon income after that planned investment is active.

## 2. Correct the May transaction in `Workbook`
Find the May income transaction with these values:

| Field | Current Value |
|---|---|
| transaction_type | income |
| category_id | sr025_coupon |
| amount | 21703 |
| transaction_date | 2026-05-18 |

Change only:

| Field | New Value |
|---|---|
| category_id | sbn_existing_coupon |

Do not change the amount, date or cash account.

## 3. After Editing Google Sheets
1. Open PortOS and run **Sync**.
2. Generate the May Monthly Report again.
3. Confirm the report now shows:
   - `SBN Existing` cash income: **Rp 21,703**
   - `SR025 T5` cash income: **Rp 0**
4. Confirm overall Total Income and Updated Forecast Investment Return totals remain unchanged.

## Optional Future Planning Note
No `Monthly_Plan` row is changed by this correction. If you later want recurring forecast income for the existing SBN before payment is recorded, add a separately reviewed plan row using `sbn_existing_coupon`; do not reuse the future `sr025_coupon` plan rows.
