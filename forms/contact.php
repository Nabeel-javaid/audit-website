<?php
  $receiving_email_address = 'your_email@example.com';

  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    die('Unable to load the "PHP Email Form" Library!');
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;

  $contact->to = $receiving_email_address;
  $contact->from_name = $_POST['name'] ?? '';
  $contact->from_email = $_POST['email'] ?? '';
  $contact->subject = $_POST['subject'] ?? '';

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  // Basic form validation
  if (!empty($contact->from_name) && !empty($contact->from_email) && !empty($contact->subject)) {
    $contact->add_message($contact->from_name, 'From');
    $contact->add_message($contact->from_email, 'Email');
    $contact->add_message($_POST['message'] ?? '', 'Message', 10);

    echo $contact->send();
  } else {
    echo 'Error: Please fill in all required fields.';
  }
?>
