#!/usr/bin/perl
use strict;
use warnings;
use CGI;
use Cwd 'getcwd';
my $failed=0;
my $cwd=getcwd();
my $cgi=new CGI;
(my $request_path=$cgi->script_name)=~s#[^/]+$##;

my %config=(
	cwd=>$cwd,
	http_host=>$cgi->virtual_host,
	request_path=>$request_path,
	user=>scalar getpwuid($>)
);

opendir DIR, $cwd or die($failed=1);
for my $update_file (grep {m/\.install-template$/} readdir DIR) {
	
	(my $output_file=$update_file)=~s/\.install-template$//;
	unless(open IFILE, "<", $update_file) {
		$failed=1;
		last;
	}
	my $mode=(stat IFILE)[2];
	unless(open OFILE, ">", $output_file) {
		$failed=1;
		last;
	}
	my $line;
	while((!$failed) and $line=<IFILE>) {
		$line=~s/\[\* (\w+) \*\]/$config{$1}/g;
		print OFILE $line;
	}
	close OFILE;
	close IFILE;
	unlink $update_file;
	chmod $mode, $output_file;
}
closedir DIR;

my $success;
if($failed==1) {
	die;
}
$success=1;
print $cgi->redirect("update_htaccess.cgi");

sub END {
	unlink $0 if $success;
}
