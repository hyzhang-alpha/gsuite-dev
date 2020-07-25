function CreateCalendarEventWithGoogleMeet()
{
  var subject = 'YOUR MEETING SUBJECT';
  var description = 'YOUR MEETING DESCRIPTION';
  var attendeesEmailAddress = 'attendees@domain.com';

  var event = {
    'summary': subject,
    'location': 'Singapore',
    'description': description,
    'start': {
      'dateTime': '2020-05-21T09:00:00+08:00',
      'timeZone': 'Asia/Singapore'
    },
    'end': {
      'dateTime': '2020-05-21T10:00:00+08:00',
      'timeZone': 'Asia/Singapore'
    },
    'attendees': [
      {'email': attendeesEmailAddress}
    ],
    'conference_data': {
      'create_request': {
         'request_id': '3394beae-9b34-11ea-bb37-0242ac111111'}
    }
  };
  
  var calendarId = 'primary';
  var optionalParameters = {conference_data_version: 1};
  
  var response = Calendar.Events.insert(event, calendarId, optionalParameters);

  Logger.log(response.hangoutLink);
}
