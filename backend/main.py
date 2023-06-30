import requests
from requests.exceptions import RequestException, HTTPError

class User:
  def __init__(self) -> None:
    self.users = []
    
  def get_users(self):
    try:
      response = requests.get("https://jsonplaceholder.typicode.com/users")
      data = response.json()
      
      for user in data:
        new_user = {
          "id": user["id"], 
          "email": user["email"],
          "name": user["name"],
          "company_name": user["company"]["name"]
        }
        
        self.users.append(new_user)
    except (RequestException, HTTPError) as exception:
      print(f"Request error: {exception}")
      
  def get_first_3_users(self):
    first_three_users = self.users[0:3]
    return first_three_users
  
  def order_by(self, field: str):
    try:
      self.users = sorted(self.users, key=lambda field_value: field_value[field])
      return self.users
    except (ValueError, KeyError) as exception:
      print(f"{exception}")
    
  def dump_emails(self):
    for user in self.users:
      print(user["email"])
      
  def remove_all(self):
    self.users = []
    
user = User()
# user.get_users()
# sorted_users = user.order_by("name")
# user.dump_emails()
# user.remove_all()

user.get_users()
user.order_by('email')
first_three_users = user.get_first_3_users()
user.dump_emails()
user.remove_all()
user.dump_emails()
user.get_users()
user.dump_emails()
user.order_by('name')

print(first_three_users)
