$ ssh-keygen -t ed25519 -C "httpsoxfonchpemnetdir"
> Generating public/private ALGORITHM key pair.
> Enter a file in which to save the key (/home/YOU/.ssh/ALGORITHM):Enter
> Enter passphrase (empty for no passphrase): Enter
> Enter same passphrase again: Enter

$ eval "$(ssh-agent -s)"
> Agent pid 59566

$ ssh-add ~/.ssh/id_ed25519

$ ssh-keygen -t ed25519-sk -C "hectorglezleon@gmail.com"
> Enter a file in which to save the key (/home/YOU/.ssh/id_ed25519_sk):Enter
> Enter passphrase (empty for no passphrase): Enter
> Enter same passphrase again: Enter

$ ssh-keygen -p -f ~/.ssh/id_ed25519
> Enter old passphrase: Enter
> Key has comment 'Enter'
> Enter new passphrase (empty for no passphrase): Enter
> Enter same passphrase again: Enter
> Your identification has been saved with the new passphrase.

env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env

ssh-add~/path/to/my/key

> Initializing new SSH agent...
> succeeded
> Enter passphrase for /c/Users/YOU/.ssh/id_rsa: Enter
> Identity added: /c/Users/YOU/.ssh/id_rsa (/c/Users/YOU/.ssh/id_rsa)
> Welcome to Git (version 1.6.0.2-preview20080923)
>
> Run 'git help git' to display the help index.
> Run 'git help ' to display help for specific commands.

$ Open ssh
