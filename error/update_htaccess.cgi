#!/usr/bin/perl
use strict;
use warnings;
use CGI;
my $cgi=new CGI;
my $user=scalar getpwuid($>);
my $success=1;
# SPECIAL post-install script
system("/bin/cat .htaccess >> $ENV{DOCUMENT_ROOT}/.htaccess");
print $cgi->redirect("/");

sub END {
	unlink $0 if $success;
}
