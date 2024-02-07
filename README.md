# Prerequisites
- Before you begin, ensure that you have the following software and tools installed on your system: Node.js,MongoDB
# Problem Statement:Design a Grocery Booking 
## API:
Role
### Admin
### User

## Mandatory Requirements:Design API endpoints
# 1. Admin Responsibilities:   
### Add new grocery items to the system (POST)
```bash
/admin/add-items
```
### View existing grocery items  (GET)
```bash
/admin/view-items
```
### Remove grocery items from the system  (DELETE)
```bash
/admin/remove-item/:itemId
```
### Update details (e.g., name, price) of existing grocery items   (PUT)
```bash
/admin/update-item/:itemId
```
### Manage inventory levels of grocery items (PUT)
```bash
/admin/manage-inventory/:itemId
```
# 2. User Responsibilities:   
### View the list of available grocery items   
```bash
/user/view-items
```
### Ability to book multiple grocery items in a single orderEndFragment

```bash
/user/book-items
```


# Customization
we can customize the project by adding authentication, authorization for Admin and user.
      


