@feature_users
Feature: Users

  @get_user_id
  Scenario: (Get) User by id
    When search for a single user with the id 4
    Then should return status 200
    And should return the correct id

  @post_new_user
  Scenario Outline: (Post) Create a new user
    When create a new user with <id> and '<userName>' and '<password>'
    Then should return status 200
    And should return the correct username

      Examples:
        | id    | userName     | password      |
        | 11    | Lucas        | senha1        |
        | 12    | Teste        | senha2        |

  @put_update_user
  Scenario Outline: (Put) Update users
    When update a user with <id> and '<newuser>' and '<newpass>'
    Then should return status 200
    And should return the correct new username

      Examples:
        | id       | newuser     | newpass   |
        | 11       | Novonome    | senhan1   |
        | 12       | Novonome    | senhan2   |

  @delete_user
  Scenario Outline: (Delete) users
    When delete a user with <id> 
    Then should return status 200

      Examples:
        | id   |
        | 11   | 
        | 12   | 

  @post_new_random_user
  Scenario Outline: (Post) random users
    When create a new random user with <userid>
    Then should return status 200
    And should return the correct user

      Examples:
        | userid    |
        | 13        | 
        | 14        | 
        | 15        |
        | 16        |