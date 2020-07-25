function ArchiveUsersBasedOnOU() {
    var optionalArgs = {
        customer: 'my_customer',
        query: 'orgUnitPath=/Former-employees/VFE'
    };
    var response = AdminDirectory.Users.list(optionalArgs);
    var users = response.users;
    if (users && users.length > 0) {
        Logger.log('Users:');
        for (i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.archived == false) {
                var updateResource = {
                    archived: true
                };

                AdminDirectory.Users.update(updateResource, user.id);
            }
            Logger.log('%s (%s) - %s', user.primaryEmail, user.archived, user.name.fullName);
        }
    } else {
        Logger.log('No users found.');
    }
}
