# Facebook-Oauth

**GIT-Credential-remove**
**start the ssh-agent in the background**
ssh-agent -s

*Agent pid 59566*

So, Ctrl+Alt+Del and hit End Process to stop each 'ssh-agent.exe' process.

*In 'Git Bash':*

Start the 'ssh-agent.exe' process

eval $(ssh-agent -s)
And install the SSH keys

ssh-add "C:\Users\MyName\.ssh\id_rsa"

* Adjust the path above with your username, and make sure that the location of the* /.ssh directory is in the correct place. I think you choose this location during the Git installation? Maybe not...


$ GIT_SSH_COMMAND="ssh -i different_private_key" git push

Save the file in the editor. If it's Emacs: CTRLX CTRLS to save then CTRLX CTRLC to quit or if it's vi: 

:wq

**PERMISSION DENIED**
https://help.github.com/articles/error-permission-denied-publickey/
**ADDING NEW SSH KEY**
https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

cat ~/.ssh/id_rsa.pub | pbcopy 

**ANOTHER WAY**
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/path-to-the-keyfile
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"





